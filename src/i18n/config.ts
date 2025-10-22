import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 導入翻譯檔案
import translationEN from './locales/en.json';
import translationZH from './locales/zh.json';

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};

i18n
  // 偵測使用者語言
  .use(LanguageDetector)
  // 將 i18n 實例傳遞給 react-i18next
  .use(initReactI18next)
  // 初始化 i18next
  .init({
    resources,
    fallbackLng: 'zh', // 預設語言
    lng: 'zh', // 初始語言
    debug: false, // 開發時可設為 true 來查看 console 日誌
    
    interpolation: {
      escapeValue: false, // React 已經處理了 XSS
    },

    // 語言偵測選項
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;