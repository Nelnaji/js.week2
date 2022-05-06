const moi = {
  nom: "Elkhaznagi",
  prenom: "Nawfal",
  age: 28,
  taille: 177,
};

console.log(moi.nom);

const perso1 = {
  nom: "Poncini",
  prenom: "Mario",
  age: 35,
  taille: 167,
};
const perso2 = {};

perso2.nom = moi.nom;

perso2.age = perso1.age;
perso2.taille = 195;

console.log(perso2);
