import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "./Page/Home.jsx"
import FicheLogement from './Page/Fiche-logement';
import Page404 from "./Page/Page404";
import Apropos from "./Page/Apropos";

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
