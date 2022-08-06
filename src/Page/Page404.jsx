import React from "react"
import "../style/Page-404.css"


function Page404() {
    return (
        <div>
            <div className="message-erreur">
                <h5>404</h5>
                <span>Oups! La page que vous demandez n'existe pas.</span>
                <p>Retourner sur la page d'accueil</p>
            </div>
        </div>
    )
}

export default Page404