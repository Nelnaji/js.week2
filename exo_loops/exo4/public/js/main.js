const etudiants = [];

let classe = +prompt(
  `Veuillez inserez le nombre maximum d'étudiants dans la classe`
);

while (etudiants.length < classe) {
  etudiants.push(`Etudiants ${etudiants.length + 1}`);
}

console.log(etudiants);
