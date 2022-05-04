const grandNombres = [];

const petitNombres = [];

;
// fait 
do {
    let chiffre = Number(prompt(`Veuillez écrire un chiffre`)); //42

    if (chiffre >= 12) {
        grandNombres.push(chiffre)
    } else {
        petitNombres.push(chiffre)
    }
    // tant que ces conditions ne sont pas remplies
} while (grandNombres.length < 3 && petitNombres.length < 3)

alert(`Voici les chiffres que vous avez inscrits petit chiffres ${petitNombres} et les grands chiffres ${grandNombres}`)