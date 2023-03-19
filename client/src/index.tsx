import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './core/store/store'
import App from './App'
import { I18nActivator } from './core/locales/i18nActivator'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nActivator>
        <App />
      </I18nActivator>
    </Provider>
  </React.StrictMode>
)
