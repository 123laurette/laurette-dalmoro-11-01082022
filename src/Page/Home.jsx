import React from "react"
import accueil from "../assets/banniere accueil.png"
import "../style/Home.css"
import Gallery from "../Component/Gallery/Gallery"


function Home() {
    return (
        <div>
            <div className="banniere">
                <img src={accueil} alt="bord de mer rocheux" />
                <h1>Chez vous, partout et ailleurs</h1>
                <div className="filtre-photo"></div>
            </div>
            <Gallery />
        </div>
    )
}

export default Home

