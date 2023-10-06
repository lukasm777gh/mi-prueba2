import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.jsx'
import { FirstApp } from './FirstApp.jsx';
import './index.css'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp valor='Hola' titulo="Hola Mundo"/>
  </React.StrictMode>,
)
