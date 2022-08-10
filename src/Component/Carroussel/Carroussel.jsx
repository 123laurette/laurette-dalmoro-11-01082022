import { useState } from "react"
import "./Carroussel.css"
import suivant from "../../assets/suivant.png"
import precedent from "../../assets/precedent.png"

let index = 0


function Carroussel({ pictures }) {
    const [, setRefresh] = useState(0)
    return (
        <div className="photo" style={{backgroundImage: `url("${pictures[index]}")`,}}>
        {pictures.length > 1 ? navigation() : ""}
        </div>
    )
    function btnsuivant() {
        index++
        if (index >= pictures.length) index = 0
        setRefresh(index)
    }
    function btnprecedent() {
        index--
        if (index < 0) index = pictures.length - 1
        setRefresh(index)
    }

    function navigation() {
        return (
            <div className="navigation">
                <img src={precedent} className="precedent" onClick={btnprecedent} alt=""/>
                
                <img src={suivant} className="suivant" onClick={btnsuivant} alt=""/>
                <p>{index + 1}/{pictures.length}</p>
            </div>
        )
    }
}

export default Carroussel



