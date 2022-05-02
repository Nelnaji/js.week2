// console.log(1 == "1");
// console.log(1 === "1");

// const nom = prompt('quel est votre prénom ?');

// if (nom.length < 4) {
//     alert('Ton nom est trop court')
// }



let addition = Number(prompt("que vaux 3+4 ?"));
if (addition === 7) {
    alert('bonne reponse')
} else {
    alert("mauvaise reponse")
}


let data = 12;
let answer = Number(prompt("que vaux 3*4 ?"));
if (data === answer) {
    alert(`c'etait bien ${data}`)
} else {
    alert(`c'est dommage tu n'est qu'a ${data - answer} unités de la bonne réponse`)
}