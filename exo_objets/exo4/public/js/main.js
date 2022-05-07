const vieille_dame = {
  age: 80,
  nom: { nom: "Maria", prenom: "carrey" },
  moral: "mal",
  objet: "canne",
  parler: function () {
    if (this.moral === "mal") {
      alert(
        `Vous me deranger --- ${this.nom.nom} vous frappe de sa ${this.objet}`
      );
    } else if (this.moral === "bien") {
      alert(`Oh mais quelle plaisante surprise ${vieil_homme.nom}`);
    }
  },
};

vieille_dame.parler();

const vieil_homme = {
  nom: "Carlos",
  adoucir: function () {
    return (vieille_dame.moral = "bien");
  },
};
console.log(vieille_dame);
vieil_homme.adoucir();
vieille_dame.parler();
console.log(vieille_dame);
