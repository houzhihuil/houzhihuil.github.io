/***********************************************************
 *
 *
 * CHARGEMENT DE DONNÉES De Le PRODUIT À VOIR
 *
 */
window.addEventListener('load', function (event){
    //window.location.hash retourne #99
    let id  = window.location.hash.substring(1) // retourne 99
     
    fetch('https://node-labo1.cyclic.cloud/getProduct/' + id,)
        .then((resp) => { return resp.json()})
        .then((data) => {
            document.getElementById('image').src = data.data.image
            document.getElementById('id').innerHTML = data.data.id
            document.getElementById('description').innerHTML = data.data.description
            document.getElementById('details').innerHTML = data.data.details
            document.getElementById('prix').innerHTML = data.data.prix + '$'  
        })
        .catch((error) => { console.log(error.toString())})
})