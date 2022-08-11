import React from "react"
import logoFooter from "../../assets/LOGO Footer.png"
import "./Footer.css"



function Footer () {
    return (
        <footer>
            <img src={logoFooter} alt="logo en noir" />
            <p> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer