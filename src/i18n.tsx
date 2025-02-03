import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      EN: {
        translation: {
          welcome: "Welcome!",
          language: "Language",
        },
      },
      RU: {
        translation: {
          welcome: "Добро пожаловать!",
          language: "Язык",
        },
      },
    },
    fallbackLng: "EN", 
    interpolation: { escapeValue: false },
  });

export default i18n;