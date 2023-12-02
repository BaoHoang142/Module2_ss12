import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/indexTest.js'
ReactDOM.createRoot(document.getElementById('root')).render(
// cung cấp dự án
  <Provider store={store}>
    <App />
  </Provider>
  
)
