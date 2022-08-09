import React from "react"
import arrowclose from "../../assets/arrow_close.png"
import arrowopen from "../../assets/arrow_open.png"
import "./DropdownCourt.css"
import { useState } from "react"


function Dropdown({ title, text, extraClass }) {
    const [dropdownOpened, setDropdown] = useState(false)

    return dropdownOpened ? (
        <div className={extraClass ? "dropdown " + extraClass : "dropdown"}>
        <div className="titre-description">
            <h3>{title}</h3>
            <img
            src={arrowclose}
            alt="Cacher contenu"
            onClick={() => setDropdown(false)}
            />
        </div>
        {typeof text === "object" ? convertArray(text) : <p>{text}</p>}
        </div>
    ) : (
        <div className="dropdown">
        <div className="titre-description">
            <h3>{title}</h3>
            <img
            src={arrowopen}
            alt="Afficher contenu"
            onClick={() => setDropdown(true)}
            />
        </div>
        </div>
    )
}

function convertArray(arr) {
    return (
        <ul>
        {arr.map((equipment) => (
            <li>{equipment}</li>
        ))}
        </ul>
    )
}

export default Dropdown






