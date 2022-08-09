import React from "react"
import {NavLink} from "react-router-dom"
import "./Header.css"
import logo from "../../assets/LOGO Header.png"


function Header () {
    return (
        <div className="Header">
            <header>
                <img src={logo} alt="logo Kasa" />
                <nav>
                    <NavLink to="/" className={(Home) => Home.isActive ? "active" : "" }>
                        Accueil</NavLink>
                    <NavLink to="/Apropos" className={(Apropos) => Apropos.isActive ? "active" : ""}>
                        A Propos</NavLink>
                </nav>
            </header>
        </div>
    )
}


//si le document qui a la classe Home est ouvert, alors appliquer la classe active, sinon rien
//si le document qui a la classe Apropos est ouvert, alors appliquer la classe active, siinon rien
export default Header
