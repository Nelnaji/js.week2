// console.log(1 == "1");
// console.log(1 === "1");

// const nom = prompt('quel est votre prénom ?');

// if (nom.length < 4) {
//     alert('Ton nom est trop court')
// }



// let addition = Number(prompt("que vaux 3+4 ?"));
// if (addition === 7) {
//     alert('bonne reponse')
// } else {
//     alert("mauvaise reponse")
// }

// // 5
// let data = 12;
// let answer = Number(prompt("que vaux 3*4 ?"));
// if (data === answer) {
//     alert(`c'etait bien ${data}`)
// } else {
//     alert(`c'est dommage tu n'est qu'a ${data - answer} unités de la bonne réponse`)
// }

// 6

// const tableau = [];

// let nom = prompt('quel est votre nom?');

// tableau.push(nom);
// let prenom = prompt('quel est votre prenom?');

// tableau.push(prenom);
// let age = Number(prompt('quel age avez vous?'));

// tableau.push(age);

// if (tableau.length > 2) {
//     alert(`Voici vos données ${tableau}`)
// }

// 7

// const grandNombres = [];
// const petitNombres = [];
// let chiffre;
// do {
//     chiffre = Number(prompt('veuillez ecrire un chiffre au hasard'));
//     if (chiffre >= 12) {
//         grandNombres.push(chiffre)
//         console.log(grandNombres)
//     } else {
//         petitNombres.push(chiffre);
//         console.log(petitNombres.length)
//     }
// } while (grandNombres.length < 3 && petitNombres.length < 3)

// // l'une des deux conditions est remplis 

// alert(`voici les chiffres que vous avez introduit plus de 12 : ${grandNombres} , et 12 ou moins ${petitNombres}`);



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