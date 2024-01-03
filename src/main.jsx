import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/main.scss'
import { Provider } from 'react-redux'
import store from './store/store.js'
import CommunicationHandler from './hooks/CommunicationHandler.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <CommunicationHandler />
      <App />
    </Provider>
  </>,
)
