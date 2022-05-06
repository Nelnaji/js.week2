const codingSchool23 = [];

const ajout = function () {
  let i = 0;
  let ajout;
  do {
    ajout = prompt(`ajoutez un eleve`);
    codingSchool23.push(ajout);
  } while (i < 5);
};
const sup = function () {
  let sup;
  do {
    sup = prompt(`suprimmez un eleve`);
    codingSchool23.pop(sup);
  } while (codingSchool23.length < 0);
};
