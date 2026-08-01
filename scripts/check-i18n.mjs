import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync("script.js", "utf8");
const dataSource = source.slice(0, source.indexOf("const languageSelect ="));
const context = {};
const failures = [];

vm.runInNewContext(
  `${dataSource}\nresult = { officialTexts, translations };`,
  context,
);

const { officialTexts, translations } = context.result;
const locales = ["en", "de", "fr", "es", "it", "ar", "zh", "nl", "pl", "lb"];
const referenceKeys = Object.keys(translations.en);

for (const locale of locales) {
  const dictionary = translations[locale];

  if (!dictionary) {
    failures.push(`${locale}: missing dictionary`);
    continue;
  }

  const keys = Object.keys(dictionary);

  for (const key of referenceKeys) {
    if (!(key in dictionary)) {
      failures.push(`${locale}: missing ${key}`);
    } else if (typeof dictionary[key] !== "string" || dictionary[key].trim() === "") {
      failures.push(`${locale}: empty or invalid ${key}`);
    }
  }

  for (const key of keys) {
    if (!referenceKeys.includes(key)) {
      failures.push(`${locale}: unexpected ${key}`);
    }
  }

  if (!officialTexts[locale] || officialTexts[locale].length < 500) {
    failures.push(`${locale}: official project text is missing or incomplete`);
  }

  if (dictionary.officialText !== officialTexts[locale]) {
    failures.push(`${locale}: official text is not connected to the dictionary`);
  }
}

const html = fs.readFileSync("index.html", "utf8");
const usedKeys = [
  ...html.matchAll(/data-i18n(?:-alt|-aria)?="([^"]+)"/g),
].map((match) => match[1]);

for (const key of new Set(usedKeys)) {
  if (!(key in translations.en)) {
    failures.push(`index.html: unknown translation key ${key}`);
  }
}

const forbidden = [
  [html, /whatsapp-widget/, "inactive English-only WhatsApp widget"],
  [source, /function mailtoHref\(\)\s*\{/, "non-localized mailto helper"],
  [source, /CONSULTATION_MAILTO/, "fixed English mailto content"],
  [source, /Demander une premiere/, "missing French accent"],
  [source, /servicios se ofrecen de forma pagada/, "unnatural Spanish payment copy"],
];

for (const [content, pattern, label] of forbidden) {
  if (pattern.test(content)) {
    failures.push(label);
  }
}

if (failures.length) {
  console.error(`i18n check failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `i18n check passed: ${locales.length} locales × ${referenceKeys.length} interface values plus complete official texts`,
);
