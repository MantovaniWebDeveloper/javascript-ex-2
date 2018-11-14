//chiedo i nominativi dei concorrenti
var nomeUtente1 = prompt("Inserisca il suo nome giocatore 1")
var nomeUtente2 = prompt("Inserisca il suo nome giocatore 2")
//Stampo in html i nomi
document.getElementById('nomeGiocatore').innerHTML = nomeUtente1;
document.getElementById('nomeGiocatore2').innerHTML = nomeUtente2;

//controllo i valori dei nomi
console.log("I giocatori sono: " + nomeUtente1 + ", " + nomeUtente2);
//gestisco il primo concorrente che lancia il dado
// il range deve essere da 1 a 6
var lancioConcorrente1 = Math.floor(Math.random()*7);
//controllo il risultato
console.log(lancioConcorrente1);
document.getElementById('valoreLancio').innerHTML = lancioConcorrente1;

//gestisco il primo concorrente che lancia il dado
// il range deve essere da 1 a 6
var lancioConcorrente2 = Math.floor(Math.random()*7);
//controllo il risultato
console.log(lancioConcorrente2);
document.getElementById('valoreLancio2').innerHTML = lancioConcorrente2;
//effettuo il confronto dei valori dei due lanci random
if (lancioConcorrente1 > lancioConcorrente2) {
  console.log("hai vinto, " + nomeUtente1);
  document.getElementById('score').innerHTML = "HAI VINTO";
}
else {
  console.log("hai vinto, " + nomeUtente2);
  document.getElementById('score2').innerHTML = "HAI PERSO";

}
