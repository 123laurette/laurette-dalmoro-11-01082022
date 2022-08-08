import React from "react"

import accueil from "../assets/banniere accueil.png"
import "../style/Home.css"
import Gallery from "../Component/Gallery/Gallery"
import { Link } from "react-router-dom"
import { getDataLogements } from "../dataJson"



function Home() {
    return (
        <div className="Home">
            <div className="banniere">
                <img src={accueil} alt="bord de mer rocheux" />
                <h1>Chez vous, partout et ailleurs</h1>
                <div className="filtre-photo"></div>
            </div>
                <div className="GalleryLogements">
                    {getDataLogements().map((logement) => (
                        <Link to={`/Fichelogement/${logement.id}`} key={logement.id}>
                    <Gallery
                        cover={logement.cover}
                        title={logement.title}
                        id={logement.id}
                    />
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Home

