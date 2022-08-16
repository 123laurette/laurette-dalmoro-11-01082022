import React from "react"
import "../style/Fiche-logement.css"
import { getIdLogements } from "../services"
import { useParams } from "react-router-dom"
import Carroussel from "../Component/Carroussel/Carroussel"
import Tag from "../Component/Tag/Tag"
import Dropdown from "../Component/Dropdown/Dropdown"
import Page404 from "./Page404"

function FicheLogement() {
    const {logementId} = useParams()
    const ficheLogement = getIdLogements(logementId)

    function afficheEtoiles() {
        const classes = [null,"une","deux","trois","quatre","cinq",]
            return "etoiles " + classes[parseInt(ficheLogement.rating)]
    }

    return FicheLogement === undefined ? (
    <Page404 />
    ) : (
        <div className="ficheLogement">
            <div className="navig">
                <Carroussel 
                pictures={ficheLogement.pictures}/>
                </div>
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
            <div className="tag-eval">
                <div className="tags">
                    {ficheLogement.tags.map((tag) => (
                    <Tag tagsNom={tag} key={tag}/>
                    ))}
                </div>
                <div className={afficheEtoiles()}></div>
            </div>
            <div className="descript-equip">
                <div className="description">
                    <Dropdown title="Description" text={ficheLogement.description}/>  
                </div>
                <div className="equipements">
                    <Dropdown title="Équipements" text={ficheLogement.equipments}/>             
                </div>
            </div>
        </div>
    )
}

export default FicheLogement



