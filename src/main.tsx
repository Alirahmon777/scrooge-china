import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import './assets/styles/media.css';
import AppContextProvider from './context/AppContextProvider.tsx';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { HydrationProvider, Client } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import i18n from './lib/i18n/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HydrationProvider>
      <AppContextProvider>
        <Provider store={store}>
          <BrowserRouter>
            <I18nextProvider i18n={i18n}>
              <HelmetProvider>
                <Toaster reverseOrder={true} />
                <Client>
                  <App />
                </Client>
              </HelmetProvider>
            </I18nextProvider>
          </BrowserRouter>
        </Provider>
      </AppContextProvider>
    </HydrationProvider>
  </React.StrictMode>
);
