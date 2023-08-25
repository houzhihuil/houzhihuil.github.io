/***********************************************************
 *
 *
 * CHARGEMENT DE DONNÉES De Le PRODUIT À ÉDITER
 *
 */
window.addEventListener('load', function (event){
    //window.location.hash retourne #99
    let id  = window.location.hash.substring(1)
    fetch('https://node-labo1.cyclic.cloud/getProduct/' + id,)
    .then((resp) => { return resp.json()})
    .then((data) => { console.log(data.data.details) 
        document.getElementById('id').innerHTML = data.data.id
        document.getElementById('description').value = data.data.description
        document.getElementById('details').value = data.data.details
        document.getElementById('prix').value = data.data.prix + '$' 
    })
    .catch((error) => { console.log(error.toString())})
     
})

/*************************************************
 *
 *
 * VALIDER LES CHANGEMENTS
 *
 */
 
let btnEditer = document.getElementById('btnEditer')
btnEditer.addEventListener('click', function (event){

    let produit = {
        description : document.getElementById('description').value,
        details : document.getElementById('details').value,
        prix : document.getElementById('prix').value
         
    }
 
    let id = document.getElementById('id').innerHTML
    fetch('https://node-labo1.cyclic.cloud/updateProduct/' + id,
        {method: 'PUT',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(produit) //transformer un objet en mémoire à un fichier JSON
            }
            )
        .then((resp) => {
            if(resp.status == 200){ //tout va bien
                document.location.href = 'index.html'
            }else{
                alert('Une erreur est survenue')
            }
        })
        .catch((error) => { console.log(error.toString())})
}) 