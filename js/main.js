//creo un array contenente una lista di email
var listaEmail = ['alonso@gmail.com','verstappen@redbull.com', 'ferrari@ferrari.it'];
//testo se l'array effetivamente esiste
console.log('Elemento array listaEmail: ' + listaEmail[1]);
//devo chiedere all'utente una sua email
var emailUtente = prompt('Per effetuare il login mi indichi la sua email');
//testo se abbiamo recuperato il valore
console.log('Valore email utente: ' + emailUtente);
//controllo se effetivamente è un email

//navigo la lista
for(var i=0; i < listaEmail.length; i++) {
  //eseguo il controllo se l'email esiste
  if (listaEmail[i].indexOf(emailUtente) != -1) {
    console.log("email combacia");
    //se l'email esiste login effettuato in caso negativo
    document.writeln("Login effettuato")
  }
  else {
    console.log("email non combacia");
    document.writeln("Login non effettuato")
    break;

  }
}

//se l'email esiste login effettuato in caso negativo
//messaggio di errore
