// Ex 01
/*
const prenom = [
  "Saul",
  "Tom",
  "Peter",
  "Vince",
  "John",
  "Nacho",
  "James",
  "Bob",
  "Jimmy",
];

for (i = 0; i < 9; i++) {
  console.log(`Bonjour, ${prenom[i]}`);
}
*/
//  Ex 02
/*
const fruits = ["Banane", "Ananas", "Orange", "Pomme", "Mangue", "Pasteque"];
console.log(fruits);

while (fruits.length > 0) {
  fruits.pop();
}

console.log(fruits);
*/

//  Ex 03
/*
const panierLegumes = ["Carottes", "Courgettes", "Tomates", "Aubergines"];
const caisseLegumes = [];
let longueur = panierLegumes.length - 1;

while (longueur >= 0) {
  caisseLegumes.push(panierLegumes[longueur]);
  panierLegumes.splice(longueur, 1);
  longueur--;
}

console.log(panierLegumes);
console.log(caisseLegumes);
*/
// Ex 04
/*
let reponse = 1492;
let enigme;

while (enigme !== reponse) {
  enigme = +prompt(`En quelle année l'amerique a t-elle été dècouverte ?`);
}
*/
// Ex 05
/*
let reponse = 1492;
let enigme;
do {
  enigme = +prompt(`En quelle année l'amerique a t-elle été dècouverte ?`);
} while (enigme !== reponse);
*/

// Ex 06
/*
let startYear = 1970;
let currentYear = new Date().getFullYear();
let randomYear = Math.floor(
  startYear + Math.random() * (currentYear - startYear + 1)
);

let age = currentYear - randomYear;
let question;
let essaie = 3;

do {
  question = +prompt(
    `Si je suis nès en ${randomYear} quel âge ai-je aujourd'hui? vous avez ${essaie} sur 3`
  );
  essaie--;
} while (question !== age && essaie > 0);
alert(`la bonne reponse etait ${age} ans`);
*/

// Ex 07
/*
let panierFruits = [];

do {
  panierFruits.push(
    prompt(`Veuillez inscrire un fruit ${panierFruits.length} /8`)
  );
} while (panierFruits.length < 8);

for (i = 0; i < panierFruits.length; i++) {
  panierFruits[i] =
    panierFruits[i].charAt(0).toUpperCase() + panierFruits[i].slice(1);
}

let del = prompt(
  `Voici votre tableau : ${panierFruits} Si vous souhaitez suprimmer un fruit ecrivez son nom`
);

del = del.charAt(0).toUpperCase() + del.slice(1);

for (i = 0; i < panierFruits.length; i++) {
  if (del === panierFruits[i]) {
    panierFruits.splice(i, 1);
  }
}

alert(`Voici les fruits restants ${panierFruits}`);
*/

const panierFruits = [];

let supprimeFruit;

do {
  panierFruits.push(
    prompt(`Veuillez introduire le nom d'un fruit ${panierFruits.length}/8`)
  );
} while (panierFruits.length < 8);

for (i = 0; i < panierFruits.length; i++) {
  panierFruits[i] =
    panierFruits[i].charAt(0).toUpperCase() +
    panierFruits[i].slice(1).toLowerCase();
}

do {
  supprimeFruit = prompt(
    `Voici les fruits que vous avez inscrits ${panierFruits}, vous pouvez suprimmer un fruit en ecrivant sont nom`
  );
  supprimeFruit =
    supprimeFruit.charAt(0).toUpperCase() +
    supprimeFruit.slice(1).toLowerCase();

  // code qui supprime element ecrit
  // for (i = 0; i < panierFruits.length; i++) {
  //   if (panierFruits[i] != supprimeFruit) {
  //     alert(`Merci bon appetit`);
  //   } else {
  //     panierFruits.splice(i, 1);
  //   }
  // }

  if (panierFruits.indexOf(supprimeFruit) === -1) {
    alert(`Merci Bon appetit`);
    // arrete la loop.
    break;
  } else {
    panierFruits.splice(panierFruits.indexOf(supprimeFruit), 1);
  }
} while (panierFruits.length > 0);
