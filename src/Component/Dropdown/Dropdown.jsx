import React from "react"
import arrowclose from "../../assets/arrow_close.png"
import arrowopen from "../../assets/arrow_open.png"
import "./Dropdown.css"
import { useState } from "react"


function Dropdown({ title, text, extraClass }) {
    const [dropdownOuvert, setDropdown] = useState(false)

    return dropdownOuvert ? (
        <div className={extraClass ? "dropdown " + extraClass : "dropdown"}>
            <div className="titre-dropdown">
                <h3>{title}</h3>
                <img src={arrowclose} alt="Contenu invisible" onClick={() => setDropdown(false)}/>
            </div>
            {typeof text === "object" ? tabEquipement(text) : <p>{text}</p>}
        </div>
    ) : (
        <div className="dropdown">
            <div className="titre-dropdown">
                <h3>{title}</h3>
                <img src={arrowopen} alt="Contenu visible" onClick={() => setDropdown(true)}/>
            </div>
        </div>
    )
}

function tabEquipement(tab) {
    return (
        <ul>
            {tab.map((equipment) => (
                <li>{equipment}</li>
            ))}
        </ul>
    )
}

export default Dropdown






