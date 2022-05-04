const meteo = prompt(`ecrivez la meteo : pluie, soleil`)

switch (meteo) {
    case 'pluie':
        alert(`preparez votre parapluie`);
        break;
    case 'soleil':
        alert(`buvez de l'eau`);
        break;
    default:
        alert(`il faut ni chaud ni froid`)
}