//gestisco il primo concorrente che lancia il dado
// il range deve essere da 1 a 6
var lancioConcorrente1 = Math.floor(Math.random()*7);
//controllo il risultato
console.log(lancioConcorrente1);

//gestisco il primo concorrente che lancia il dado
// il range deve essere da 1 a 6
var lancioConcorrente2 = Math.floor(Math.random()*7);

//controllo il risultato
console.log(lancioConcorrente2);

//effettuo il confronto dei valori dei due lanci random
if (lancioConcorrente1 > lancioConcorrente2) {
  console.log("Concorrente 1 hai vinto");
}
else {
  console.log("Concorrente 2 hai vinto");
}
