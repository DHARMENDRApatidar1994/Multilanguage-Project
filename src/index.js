import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "remixicon/fonts/remixicon.css"
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import english from './component/english.json'
import hindi from './component/Hindi.json'
import punjabi from './component/Punjabi.json'



i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: english,
      },
      hi: {
        translation: hindi,
      },
      pb: {
        translation: punjabi,
      },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </I18nextProvider>
);


