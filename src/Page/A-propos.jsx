import React from "react"
import "../style/A-propos.css"
import Montagnes from "../assets/banniere page.png"
import arrowclose from "../assets/arrow_close.png"


function Apropos() {
    return (
        <div>
            <img className="baniere-a-propos"src= {Montagnes} alt="Chaine de montagnes"/>
            <div className="detail-a-propos">
                <div className="bandeau-rouge">
                    <h4>Fiabilité</h4>
                    <img src={arrowclose} alt="" />
                </div>
                <div className="detail-bandeau-rouge">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. </p>
                </div>
                <div className="bandeau-rouge">
                    <h4>Respect</h4>
                    <img src={arrowclose} alt="" />
                </div>
                <div className="detail-bandeau-rouge">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div className="bandeau-rouge">
                    <h4>Service</h4>
                    <img src={arrowclose} alt="" />
                </div>
                <div className="detail-bandeau-rouge">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div className="bandeau-rouge">
                    <h4>Sécurité</h4>
                    <img src={arrowclose} alt="" />
                </div>
                <div className="detail-bandeau-rouge">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Apropos