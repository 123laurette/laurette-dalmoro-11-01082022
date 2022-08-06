import React from "react"
import accueil from "../assets/banniere accueil.png"
import petitephoto from "../assets/petite photo.png"
import "../style/Home.css"


function Home() {
    return (
        <div>
            <div className="banniere">
                <img src={accueil} alt="bord de mer rocheux" />
                <h1>Chez vous, partout et ailleurs</h1>
                <div className="filtre-photo"></div>
            </div>

            <div className="petit-caroussel">
                <img src={petitephoto} alt="location"/>
                <div className="bcg-accueil"></div>
            </div>
            
        </div>
    )
}

export default Home

