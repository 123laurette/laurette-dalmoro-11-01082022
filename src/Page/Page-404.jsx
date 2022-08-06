import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/LOGO Header.png"
import "../style/Page-404.css"


function Page404() {
    return (
        <div>
            <header>
                <img src={logo} alt="logo Kasa" />
                <nav>
                    <Link to="/" className="accueil">Accueil</Link>
                    <Link to="/" className="Apropos">A Propos</Link>
                </nav>
            </header>
            <div className="message-erreur">
                <h5>404</h5>
                <span>Oups! La page que vous demandez n'existe pas.</span>
                <p>Retourner sur la page d'accueil</p>
            </div>
        </div>
    )
}

export default Page404