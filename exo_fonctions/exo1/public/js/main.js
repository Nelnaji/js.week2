// Ex 01

const addition = function (a, b) {
  let c = a + b;
  return c;
};

console.log(addition(10, 5));

// Ex 02
const soustraction = function (a, b) {
  let c = a - b;
  return c;
};

console.log(soustraction(10, 5));

// Ex 03

const multiplication = function (a, b) {
  let c = a * b;
  return c;
};

console.log(multiplication(10, 5));

// Ex 04
const division = function (a, b) {
  let c = a / b;
  return c;
};

console.log(division(10, 5));

// Ex 05

const modulo = function (a, b) {
  let c = a % b;
  return c;
};

console.log(modulo(10, 5));

// Ex 06

const racineQuarre = function (a) {
  let c = Math.sqrt(a);
  return c;
};

console.log(racineQuarre(5));

// Ex 07

const exposant = function (a, b) {
  let c = a ** b;
  return c;
};

console.log(exposant(2, 5));

// Ex 08
const capitalize = function (a) {
  let c = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
  return console.log(c);
};

capitalize("bonbon");

// Ex 09

const calcul = function (nbr1, operator, nbr2) {
  switch (operator) {
    case "+":
      return nbr1 + nbr2;
      break;
    case "-":
      return nbr1 - nbr2;
      break;
    case "*":
      return nbr1 * nbr2;
      break;
    case "/":
      return nbr1 / nbr2;
      break;
  }
};

console.log(calcul(5, "*", 2));
