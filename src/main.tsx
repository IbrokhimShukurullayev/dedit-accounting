import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import global_ru from "../public/locales/rus/common.json";
import global_uz from "../public/locales/uz/common.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "uz",
  resources: {
    uz: {
      global: global_uz,
    },
    ru: {
      global: global_ru,
    },
  },
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
);
