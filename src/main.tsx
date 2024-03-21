import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import './assets/styles/media.css';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store/index.ts';
import { Provider } from 'react-redux';
import i18n from './lib/i18n/index.ts';
import ChatContextProvider from './admin/context/ChatContext.tsx';
import ChatContextUserProvider from './context/ChatContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HydrationProvider>
      <Provider store={store}>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <HelmetProvider>
              <Toaster reverseOrder={true} />
              <ChatContextUserProvider>
                <ChatContextProvider>
                  <App />
                </ChatContextProvider>
              </ChatContextUserProvider>
            </HelmetProvider>
          </I18nextProvider>
        </BrowserRouter>
      </Provider>
    </HydrationProvider>
  </React.StrictMode>
);
