/*************************************************
 *
 *
 * VALIDER L'AJOUT
 *
 */

let btnAjouter = document.getElementById('btnAjouter')
btnAjouter.addEventListener('click', function (event){

    let produit = {
        description : document.getElementById('description').value,
        details : document.getElementById('details').value,
        prix : document.getElementById('prix').value
         
    }
 
    fetch('https://node-labo1.cyclic.cloud/createProduct',
        {method: 'POST',
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