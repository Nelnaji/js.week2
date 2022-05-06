//  Ex 01

const reverNumber = function (reverse) {
  let rever = reverse.toString().split("").reverse().join("");
  return rever;
};

// console.log(reverNumber(1526565));

// Ex 02
const divPar2 = function (arg) {
  let div = arg % 2;
  if (div === 0) {
    alert(`Le nombre  ${arg} est divisible par 2 x:2 = z`);
  } else {
    alert(`le nombre ${arg} n'est pas divisible par 2`);
  }
};

// divPar2(5);

// Ex 03

const logIn = function () {
  let motDePasse = "45efs";
  let mdp;
  do {
    mdp = prompt(`veuillez entrer votre mot de passe`);
  } while (mdp !== motDePasse);
  if (mdp === motDePasse) {
    alert(`Bienvenue`);
  }
};

logIn();
