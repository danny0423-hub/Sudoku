import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('zh')}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          currentLanguage === 'zh'
            ? 'bg-primary-500 text-white shadow-warm'
            : 'bg-white text-neutral-600 hover:bg-primary-50'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          currentLanguage === 'en'
            ? 'bg-primary-500 text-white shadow-warm'
            : 'bg-white text-neutral-600 hover:bg-primary-50'
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;