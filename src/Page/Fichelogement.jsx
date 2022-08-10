import React from "react"
import "../style/Fiche-logement.css"
import { getIdLogements } from "../dataJson"
import { useParams } from "react-router-dom"
import Carroussel from "../Component/Carroussel/Carroussel"
import Tag from "../Component/Tag/Tag"
import DropdownCourt from "../Component/Dropdown/DropdownCourt"

function FicheLogement() {
    const {logementId} = useParams()
    const ficheLogement = getIdLogements(logementId)

    function showRating() {
        const classes = [
          null,
          "oneStar",
          "twoStars",
          "threeStars",
          "fourStars",
          "fiveStars",
        ]
        return "stars " + classes[parseInt(ficheLogement.rating)]
      }
    return (
        <div>
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
                <div className={showRating()}></div>
            </div>
            <div className="descript-equip">
                <div className="description">
                    <DropdownCourt title="Description" text={ficheLogement.description}/>  
                </div>
                <div className="equipements">
                    <DropdownCourt title="Équipements" text={ficheLogement.equipments}/>             
                </div>
            </div>
        </div>
    )
}

export default FicheLogement



//les équipements ne sont pas repris
//pictures, equipments et tags sont des tableaux dans un tableau, donc a traiter différement