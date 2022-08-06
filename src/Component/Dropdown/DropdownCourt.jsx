import React from "react"
import arrowclose from "../../assets/arrow_close.png"
import "./DropdownCourt.css"



function DropdownCourtClose({contenu}) {
    return (
        <div className="titre-description">
            <h4>{contenu}</h4>
            <img src={arrowclose} alt="" />
        </div>
    )
}

//modifier cette fonction pour qu'elle soit générique.
//elle doit servir pour description et équipement

export default DropdownCourtClose