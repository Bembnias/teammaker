import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './core/store/store'
import App from './App'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages'
import { messages as plMessages } from './locales/pl/messages'
import './index.css'

i18n.load({
  en: enMessages,
  pl: plMessages,
})
i18n.activate('en')

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </Provider>
  </React.StrictMode>
)
