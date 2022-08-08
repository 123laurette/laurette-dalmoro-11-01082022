import React from "react"
import "./Gallery.css"


function Gallery(props) {
    return (
        <div className="gallery">
            <img src={props.cover} alt="props.title"/>  
            <div className="filtreGallery"></div>
            <h2>{props.title}</h2>
        </div> 
    )
}
//les props correspondent aux valeurs du json par mot clé
//j'indique l'endroit ou les valeurs récupérés(datajson.js) doivent se placer


export default Gallery