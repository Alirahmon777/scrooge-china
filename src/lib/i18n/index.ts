import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(detector)
  .use(backend)
  .init({
    ns: ['layout', 'home'],
    supportedLngs: ['ru', 'en'],
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    detection: { order: ['cookie', 'localStorage'], caches: ['cookie', 'localStorage'] },
  });

export default i18n;
