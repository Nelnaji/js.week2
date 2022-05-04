let userData = Number(prompt(`veuillez entrer un nombre`));
let even = userData % 2;

switch (even) {
    case 0:
        alert(`Le nombre est un multiple de 2`);
        break;
    case 1:
        alert(`Le nombre n'est pas un multiple de 2`)
        break;
    case NaN:
        alert(`Ceci n'est pas un nombre`);
        break;

}