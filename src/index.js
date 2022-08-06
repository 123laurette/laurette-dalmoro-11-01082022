import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "./page/Home.jsx"
import FicheLogement from './page/Fiche-logement';
import Page404 from "./page/Page-404";
import Apropos from "./page/A-propos";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Home />
      <FicheLogement />
      <Page404 />
      <Apropos />
    </Router>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
