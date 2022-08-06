import React from "react"
import "../style/Fiche-logement.css"
import grandephoto from "../assets/grande photo.png"
import etoileblanche from "../assets/etoile blanche.png"
import etoilerouge from "../assets/etoile rouge.png"
import arrowclose from "../assets/arrow_close.png"

function FicheLogement() {
    return (
        <div>
            <article className="grande-photo">
                <img src={grandephoto} alt="logement séléctionné" />
                <div className="titre-nom">
                    <div className="titre">
                        <h2>Cozy loft on the Canal Saint-Martin</h2>
                        <p>Paris, Île-de-France</p>
                    </div>
                    <div className="nom">
                        <h3>Alexandre Dumas</h3>
                        <div className="avatar"></div>
                    </div>
                </div>
            </article>
            <div className="tag-eval"    >
                <ul className="tag">
                    <li>Cozy</li>
                    <li>Canal</li>
                    <li>Paris 10</li>
                </ul>
                <div className="evaluation">
                    <img src={etoilerouge} alt="" />
                    <img src={etoilerouge} alt="" />
                    <img src={etoilerouge} alt="" />
                    <img src={etoileblanche} alt="" />
                    <img src={etoileblanche} alt="" />
                </div>
            </div>
            <div className="descript-equip">
                <div className="description">
                    <div className="titre-description">
                        <h4>Description</h4>
                        <img src={arrowclose} alt="" />
                    </div>
                    <div className="detail-description">
                        <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                    </div>
                </div>
                <div className="equipements">
                    <div className="titre-equipements">
                        <h4>Equipements</h4>
                        <img src={arrowclose} alt="" />
                    </div>
                    <ul className="detail-equipements">
                        <li>Climatisation</li>
                        <li>Wi-fi</li>
                        <li>Cuisine</li>
                        <li>Espace de travail</li>
                        <li>Fer à repasser</li>
                        <li>Sèche-cheveux</li>
                        <li>Cintres</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FicheLogement



