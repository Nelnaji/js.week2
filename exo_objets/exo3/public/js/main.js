const sergio = {
  nom: "sergio",
  panier: ["huil", "tomte", "pin"],
};
const francois = {
  nom: "francois",
  panier: ["huile", "tomate", "pain"],
  derober: function () {
    let vol = sergio.panier.splice(0, 2);
    francois.panier.push(...vol);
  },
};

francois.derober();
console.log(francois);
