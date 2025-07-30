import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'; // ✅ doit être là pour que les styles soient chargés
import'./App.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
