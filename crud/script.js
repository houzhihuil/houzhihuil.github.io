/***********************************************************
 *
 *
 * CHARGEMENT DE DONNÉES DES EMPLOYÉS AU DÉMARRAGE DE L'APPLICATION
 *
 */
window.addEventListener('load', function (event){
    fetch('https://node-labo1.cyclic.cloud/getAllProducts')
        .then((resp) => { return resp.json()})
        .then((data) => {
            //console.log(data)
            let tabProduits = document.getElementById('tabProduits')
            for (let i = 0; i < data.length; i++) {
                let ligne = document.createElement('tr')

                //id  
                let id = document.createElement('td')
                id.innerHTML = data[i].id
                ligne.appendChild(id)

                //description
                let description = document.createElement('td')
                description.innerHTML = data[i].description
                ligne.appendChild(description)

 /*                //details
                let details = document.createElement('td')
                details.innerHTML = data[i].details
                ligne.appendChild(details)
 
                //prix
                let prix = document.createElement('td')
                prix.innerHTML = data[i].prix
                ligne.appendChild(prix)
 */
                //actions
                let actions = document.createElement('td')

                let actionDetails = document.createElement('a')
                actionDetails.setAttribute('class', 'btn btn-outline-secondary')
                actionDetails.setAttribute('onclick', 'detailsProduit(' + data[i].id  + ")")
                actionDetails.innerHTML = 'Détails'
                actions.appendChild(actionDetails)

                let actionSupprimer = document.createElement('a')
                actionSupprimer.setAttribute('class', 'btn btn-outline-danger')
                actionSupprimer.setAttribute('onclick', 'supprimerProduit(' + data[i].id  + ")")
                actionSupprimer.innerHTML = 'Supprimer'
                actions.appendChild(actionSupprimer)

                let actionModifier = document.createElement('a')
                actionModifier.setAttribute('class', 'btn btn-outline-primary')
                actionModifier.setAttribute('onclick', 'modifierProduit(' + data[i].id  + ")")
                actionModifier.innerHTML = 'Modifier'
                actions.appendChild(actionModifier)

                ligne.appendChild(actions)

                tabProduits.appendChild(ligne)
            }
        })
        .catch((error) => { console.log(error.toString())})
})


/*********************************************************************
 *
 *
 * FONCTION POUR SUPPRIMER UN EMPLOYÉ SELON SON ID
 *
 */

function supprimerProduit(id){
    let confirmation = confirm('Voulez-vous supprimer cet produit ?')
    if(confirmation == true){
            fetch('https://node-labo1.cyclic.cloud/deleteProduct/' + id, { method: 'DELETE' } )
                .then((resp) => {
                    if(resp.status == 200){ //tout va bien
                        document.location.reload()
                    }else{
                        alert('Une erreur est survenue')
                    }
                })
            .catch((error) => { console.log(error.toString())})
    }
}


/*********************************************************************
*
*
* FONCTION POUR MODIFIER UN EMPLOYÉ DONNÉ
*
*/

function modifierProduit(id){
    window.location.href = 'edit.html#' + id
}


/*********************************************************************
 *
 *
 * FONCTION POUR VOIR LES DETAILS D'UN EMPLOYÉ DONNÉ
 *
 */

function detailsProduit(id){
    window.location.href = 'details.html#' + id
}