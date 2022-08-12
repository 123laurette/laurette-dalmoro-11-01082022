import logements from "./data/logements.json" 


function getDataLogements() {
    return logements.map((logement) => {
        return {
            cover : logement.cover,
            title : logement.title,
            id : logement.id
        }
    })
}

//je réupère mon fichier json et je crée un tableau de chaque logement
//J'en ressort les clés dont j'ai besoin pour pouvoir en récupérer les valeurs

function getIdLogements (id) {
    return logements.filter ((logement) => logement.id === id)[0];
}

//je demande que le tableau des logements soit filtré selon son id
export {
    getDataLogements,
    getIdLogements
}


