import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from "react-i18next";
import './index.css';
import App from './App.tsx';
import '@/18n.ts';
import i18n from '@/18n.ts';
createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
  <StrictMode>
    <App />
  </StrictMode>
  </I18nextProvider>
);
