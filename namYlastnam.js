// hacer una funcion que imprima el apellido del nombre introducido.

function seeYouLastName(arrayObjet, name) {

    let lastNameData;

    for (let i = 0; i < arrayObjet.length; i++) {
        if (name === arrayObjet[i].name) {
            lastNameData = arrayObjet[i].lastName
        }
    }

    lastNameData ? console.log(lastNameData) : console.log('intente de nuevo')
 }
 export { seeYouLastName }
