import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzCommon from "../public/locales/uz/common.json"; // Uzbek tilidagi json fayl
import ruCommon from "../public/locales/rus/common.json"; // Russian tilidagi json fayl

i18n.use(initReactI18next).init({
  resources: {
    uz: { common: uzCommon },
    ru: { common: ruCommon },
  },
  lng: "uz", // default language is Uzbek
  fallbackLng: "uz", // fallback language in case of missing translations
  interpolation: {
    escapeValue: false, // React already escapes values by default
  },
});

export default i18n;
