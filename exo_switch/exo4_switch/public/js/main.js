let nbr1 = Number(prompt(`Veuillez introduire le premier chiffre`));
let nbr2 = Number(prompt(`Veuillez introduire le second chiffre`))
let operateur = prompt(`Veuillez introduir l'un des operateurs suivants : + - / *`);

switch (operateur) {
    case "+":
        alert(`votre premier chiffre était : ${nbr1} 
        votre second chiffre etait ${nbr2}
        l'operateur selectionné était : + = votre resultat final est : ${nbr1 + nbr2} `);
        break;
    case "-":
        alert(`votre premier chiffre était : ${nbr1} 
        votre second chiffre etait ${nbr2}
        l'operateur selectionné était : - = votre resultat final est : ${nbr1 - nbr2} `);
        break;
    case "/":
        alert(`votre premier chiffre était : ${nbr1} 
        votre second chiffre etait ${nbr2}
        l'operateur selectionné était : / = votre resultat final est : ${nbr1 / nbr2} `);
        break;
    case "*":
        alert(`votre premier chiffre était : ${nbr1} 
        votre second chiffre etait ${nbr2}
        l'operateur selectionné était : * = votre resultat final est : ${nbr1 * nbr2} `);
        break;
    default:
        alert(`vous avez entré le mauvais operateur`)
}