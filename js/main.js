//creo un array contenente una lista di email
var listaEmail = ['alonso@gmail.com','verstappen@redbull.com', 'ferrari@ferrari.it'];
//testo se l'array effetivamente esiste
console.log('Elemento array listaEmail: ' + listaEmail[1]);
//devo chiedere all'utente una sua email
var emailUtente = prompt('Per effetuare il login mi indichi la sua email');
//testo se abbiamo recuperato il valore
console.log('Valore email utente: ' + emailUtente);
//inizializzo una variabile di controllo login
var login;
//navigo la lista
for(var i=0; i < listaEmail.length; i++) {
//eseguo il confronto se esiste la mail nella lista
  if (emailUtente == listaEmail[i]) {
    console.log("login ok");
    //setto la variabile con un booleano true
    login = true;
  }
/*  else { sovvrascrive
    console.log("no");
    login = false;
  } */
}
//se la variabile è settata true allora il login è effettuato se no
//messaggio di errore
if (login == true) {
  document.writeln("Login effettuato")
}
else {
  document.writeln("Login non effettuato")
}
