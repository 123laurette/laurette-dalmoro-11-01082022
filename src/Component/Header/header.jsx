import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"
import logo from "../../assets/LOGO Header.png"


function Header () {
    return (
        <div>
            <header>
                <img src={logo} alt="logo Kasa" />
                <nav>
                    <Link to="/" className="accueil">Accueil</Link>
                    <Link to="/" className="Apropos">A Propos</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header
