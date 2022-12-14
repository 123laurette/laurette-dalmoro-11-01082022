import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./page/Home.jsx";
import FicheLogement from "./page/Fichelogement";
import Page404 from "./page/Page404";
import Apropos from "./page/Apropos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ficheLogement/:logementId" element={<FicheLogement />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
