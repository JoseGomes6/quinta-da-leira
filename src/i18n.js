import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt";
import en from "./locales/en";
import fr from "./locales/fr";
import es from "./locales/es";
import it from "./locales/it";

export const LANGUAGES = ["PT", "EN", "FR", "ES", "IT"];
const STORAGE_KEY = "lang";

// Língua guardada pelo visitante; senão a do browser; senão PT.
function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // localStorage indisponível (ex.: navegação privada)
  }
  const browser = (navigator.language || "").slice(0, 2).toUpperCase();
  return LANGUAGES.includes(browser) ? browser : "PT";
}

i18n.use(initReactI18next).init({
  resources: {
    PT: { translation: pt },
    EN: { translation: en },
    FR: { translation: fr },
    ES: { translation: es },
    IT: { translation: it },
  },
  lng: detectLanguage(),
  fallbackLng: "PT",
  interpolation: { escapeValue: false },
});

function onLanguageChanged(lng) {
  document.documentElement.lang = lng.toLowerCase();
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // ignorar
  }
}

onLanguageChanged(i18n.language);
i18n.on("languageChanged", onLanguageChanged);

export default i18n;
