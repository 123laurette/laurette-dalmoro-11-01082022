import React from "react"
import "./DropdownLarge.css"
import arrowclose from "../../assets/arrow_close.png"


function DropdownLargeClose({contenu}) {
    return (
                <div className="bandeau-rouge">
                    <h4>{contenu}</h4>
                    <img src={arrowclose} alt="" />
                </div>
                
    )
}




export default DropdownLargeClose