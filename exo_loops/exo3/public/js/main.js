// exo 5
let sommes = [
  14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61,
];
let grosseSommes = [];

for (let i = 0; i < sommes.length; i++) {
  if (sommes[i] >= 60) {
    grosseSommes.push(sommes[i]);
    sommes.splice(i, 1);
    // i--;
  }
}

console.log(sommes);
console.log(grosseSommes);

// exo 6

let donnees = [
  14,
  7,
  97,
  {},
  "247",
  67,
  101,
  true,
  34,
  78,
  [],
  "coding school",
  0,
  11,
  32,
  "italie",
  61,
  null,
  "cent",
  100,
];

const typeString = [];
const typeNbr = [];
const typeObj = [];
const typeAutre = [];

for (let i = 0; i < donnees.length; i++) {
  if (typeof donnees[i] === "string") {
    typeString.push(donnees[i]);
    donnees.splice(i, 1);
    i--;
  } else if (typeof donnees[i] === "number") {
    typeNbr.push(donnees[i]);
    donnees.splice(i, 1);
    i--;
  } else if (typeof donnees[i] === "boolean") {
    typeAutre.push(donnees[i]);
    donnees.splice(i, 1);
    i--;
  } else if (typeof donnees[i] === "object") {
    typeObj.push(donnees[i]);
    donnees.splice(i, 1);
    i--;
  }
}

console.table(donnees);
console.table(typeString);
console.table(typeNbr);
console.table(typeAutre);
console.table(typeObj);
