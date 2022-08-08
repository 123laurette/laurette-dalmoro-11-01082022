import React from "react"
import "./Carroussel.css"
import precedent from "../../assets/precedent.png"
import suivant from "../../assets/suivant.png"
function Carroussel(props) {
    return (
            <div className="carroussel">
                <div className="banniereLogement">
                    <img className = "precedent"src={precedent} alt="" />
                    <img className="photo" src={props.pictures} alt="" />
                    <img className = "suivant" src={suivant} alt="" />
                </div>
                
            </div>
    )
}

export default Carroussel



