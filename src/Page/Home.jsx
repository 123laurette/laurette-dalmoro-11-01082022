import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/LOGO Header.png"
import accueil from "../assets/banniere accueil.png"
import petitephoto from "../assets/petite photo.png"
import "../style/Home.css"

function Home() {
    return (
        <div>
            <header>
                <img src={logo} alt="logo Kasa" />
                <nav>
                    <Link to="/" className="accueil">Accueil</Link>
                    <Link to="/" className="Apropos">A Propos</Link>
                </nav>
            </header>

            <div className="banniere">
                <img src={accueil} alt="bord de mer rocheux" />
                <h1>Chez vous, partout et ailleurs</h1>
                <div className="filtre-photo"></div>
            </div>

            <div className="petitcaroussel">
                <img src={petitephoto} alt="location"/>
                <div className="bcgaccueil"></div>
            </div>
            
        </div>
    )
}

export default Home

