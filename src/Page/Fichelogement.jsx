import React from "react"
import "../style/Fiche-logement.css"
import { getIdLogements } from "../dataJson"
import { useParams } from "react-router-dom"
import etoileblanche from "../assets/etoile blanche.png"
import etoilerouge from "../assets/etoile rouge.png"
import Carroussel from "../Component/Carroussel/Carroussel"
import Tag from "../Component/Tag/Tag"
import DropdownCourtClose from "../Component/Dropdown/DropdownCourt"

function FicheLogement() {
    const {logementId} = useParams()
    const ficheLogement = getIdLogements(logementId)

    return (
        <div>
            <Carroussel 
            pictures={ficheLogement.pictures}/>
                <div className="titre-nom">
                    <div className="titre">
                        <h2>{ficheLogement.title}</h2>
                        <p>{ficheLogement.location}</p>
                    </div>
                    <div className="nom">
                        <h3>{ficheLogement.host.name}</h3>
                        <img src={ficheLogement.host.picture} alt={ficheLogement.host.picture} />
                    </div>
            </div>
            <div className="tag-eval"    >
                <Tag />
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
                    <DropdownCourtClose contenu="Description"/>                  
                    <div className="detail-description">
                        <p>{ficheLogement.description} </p>
                    </div>
                </div>
                <div className="equipements">
                    <DropdownCourtClose contenu="Equipements"/>  
                    <ul className="detail-equipements">
                        <li>{ficheLogement.equipements}</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FicheLogement



//les équipements ne sont pas repris
//pictures, equipments et tags sont des tableaux dans un tableau, donc a traiter différement