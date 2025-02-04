import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN from "./EN.json";
import RU from "./RU.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      EN: { translation: EN },
      RU: { translation: RU },
    },
    lng: localStorage.getItem("lang") || "EN", 
    fallbackLng: "EN", 
    interpolation: { escapeValue: false },
  });

export default i18n;