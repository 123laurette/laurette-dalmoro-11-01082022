import React from "react"
import {Link} from "react-router-dom"
import logo from "../../assets/LOGO (1).png"
import "../../Component/Header/header.css"

function Header() {
    return (
        <header>
            <img src={logo} className="logo" alt="logo Kasa" />
        <nav>
            <Link to="/" className="accueil">Accueil</Link>
            <Link to="/" className="Apropos">A Propos</Link>
        </nav>
        </header>
    )
}

export default Header