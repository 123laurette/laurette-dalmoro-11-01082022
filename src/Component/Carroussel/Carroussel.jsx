import React from "react"
import "./Carroussel.css"
import grandephoto from "../../assets/grande photo.png"
import precedent from "../../assets/precedent.png"
import suivant from "../../assets/suivant.png"

function Carroussel() {
    return (
            <div className="carroussel">
                <div className="banniereLogement">
                    <img className = "precedent"src={precedent} alt="" />
                    <img className="photo" src={grandephoto} alt="logement séléctionné" />
                    <img className = "suivant" src={suivant} alt="" />
                </div>
                
            </div>
    )
}

export default Carroussel



