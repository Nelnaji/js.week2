const perso = {
  nom: "naw",
  prenom: "chaud",
};
perso.sePresenter = function () {
  console.log(`Bonjour je m'appelle ${perso.nom} ${perso.prenom}`);
};

perso.sePresenter();
console.log(perso);

const perso1 = {
  nom: "John",
  annonce: function () {
    perso1.age = prompt(`Veuillez inscrire votre age`);
    alert(`${perso1.nom} a ${perso1.age} ans`);
  },
};

perso1.annonce();
