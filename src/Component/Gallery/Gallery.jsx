import React from "react"
import petitephoto from "../../assets/petite photo.png"
import "./Gallery.css"


function Gallery() {
    return (
        <div className="gallery">
            <img src={petitephoto} alt="location"/>
            <h2>Titre de la location</h2>
        </div> 
    )
}

export default Gallery