let a = 1;
let b = 3;
let c = 0;

let delta = b * b - 4 * a * c;
console.log("Delta =  " + delta);

let x1 = (-b + Math.sqrt(delta)) / (2 * a);
console.log("X1 =  " + x1);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log("X2 =  " + x2);

// si delta est supérieur à 0
if (delta > 0) {
    console.log("Les racines de l'équation sont: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2));
}
// si delta est égal à 0
else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("L'équation a une racine double: x = " + x.toFixed(2));
}

else {
    let partieReel = - b / (2 * a);
    let partieImaginaire = Math.sqrt(- delta) / (2 * a);
    console.log("L'équation a deux racines complexes conjuguées: x1 = " + partieReel.toFixed(2) + " + " + partieImaginaire.toFixed(2) + "i, x2 = " + realPart.toFixed(2) + " - " + partieReel.toFixed(2) + "i");
}