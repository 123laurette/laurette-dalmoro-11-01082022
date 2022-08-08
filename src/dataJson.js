import logements from "../src/data/logements.json" 

// RECUPERATION DU JSON.................

/*function getDataLogements() {
    const response = fetch ("../public/logements.json" );
    console.log(response);
    const data = response.json();
    console.log(data);

    return data;
}


getDataLogements()*/


function getDataLogements() {
    return logements.map((logement) => {
        return {
            cover : logement.cover,
            title : logement.title,
            id : logement.id
        }
    })
}

function getIdLogements (id) {
    return logements.filter ((logement) => logement.id === id)[0];
}

export {
    getDataLogements,
    getIdLogements
}