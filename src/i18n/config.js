import i18next from "i18next";
import translationsPT from "../locales/pt/translations.json";
import translationsEN from "../locales/en/translations.json";

i18next.init({
  fallbackLng: "pt",
  resources: {
    pt: {
      translations: translationsPT,
    },
    en: {
      translations: translationsEN,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});

i18next.languages = ["pt", "en"];

export default i18next;
