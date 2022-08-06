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


// a décommenter quand je saurais faire le lien entre les pages !!

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./page/Home.jsx";
import FicheLogement from './page/Fiche-logement';
import Page404 from "./page/Page-404";
import Apropos from "./page/A-propos";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/" element= {<FicheLogement />} />
          <Route path="/" element= {<Page404 />} />
          <Route path="/" element= {<Apropos />} />
        </Routes>  
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
  
);*/