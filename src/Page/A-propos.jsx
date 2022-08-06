import React from "react"
import "../style/A-propos.css"
import Montagnes from "../assets/banniere page.png"
import DropdownLargeClose from "../Component/Dropdown/DropdownLarge"


function Apropos() {
    return (
        <div>
            <img className="baniere-a-propos"src= {Montagnes} alt="Chaine de montagnes"/>
            <div className="detail-a-propos">

                <DropdownLargeClose contenu= "Fiabilité"/>
                <div className="detail-bandeau-rouge">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. </p>
                </div>

                <DropdownLargeClose contenu= "Respect"/>
                <div className="detail-bandeau-rouge">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>

                <DropdownLargeClose contenu= "Service"/>
                <div className="detail-bandeau-rouge">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>

                <DropdownLargeClose contenu= "Sécurité"/>
                <div className="detail-bandeau-rouge">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Apropos