/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* let num = prompt("inserisci il primo numero")
let num1 = prompt ("inserisci il secondo numero")
num = parseInt(num);
num1 = parseInt(num1);
if(num > num1) {
  console.log("il primo numero è maggiore del secondo")
}
else {
  console.log("il secondo numero è maggiore del primo")
} */


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* let num = prompt("inserisci un numero")
num = parseInt(num);
if(num == 5) {
  console.log("equal")
}
else {
  console.log("not equal")
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* let num = prompt("inserisci un numero")
num = parseInt(num);
if(num % 5 === 0) {
  console.log("divisibile per 5")
}
else {
  console.log("non divisibile per 5")
} */


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* let num = prompt("inserisci un numero")
let num1 = prompt("inserisci un'altro numero")
num = parseInt(num);
num1 = parseInt(num1);
if(num === 8 || num1 === 8 || num - num1 === 8 || num + num1 === 8) {
  console.log("True")
}
else {
  console.log("False")
} */


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* let totalShoppingCart = prompt("inserisci totale carrello")
totalShoppingCart = parseInt(totalShoppingCart);
if(totalShoppingCart > 50) {
  alert("Totale da pagare: " + totalShoppingCart)
}
else {
  let totalShoppingCart1 = totalShoppingCart + 10;
  alert("Totale da pagare:  " + totalShoppingCart1); 
} */


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart = prompt("Inserisci il totale del carrello");
totalShoppingCart = parseInt(totalShoppingCart);

let sconto = totalShoppingCart * 0.2;
let totaleScontato = totalShoppingCart - sconto;

if (totaleScontato > 50) {
  alert("Totale da pagare: " + totaleScontato);
} else {
  let totaleConSpedizione = totaleScontato + 10;
  alert("Totale da pagare (con spese di spedizione): " + totaleConSpedizione);
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let num1 = prompt("primo numero")
let num2 = prompt("secondo numero")
let num3 = prompt("terzo numero")

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else {
  if (num1 >= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let valore = prompt("Inserisci un numero o una lettera");

if (isNaN(valore)) {
  alert("Il valore fornito non è un numero.");
} else {
  alert("Il valore fornito è un numero.");
}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let numero = prompt("Inserisci un numero");

if(numero % 2 === 0) {
  alert("Il numero è pari");
} else {
  alert("Il numero è dispari");
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

/*
  let val = prompt("Inserisci un numero");

  if (val < 5) {
      console.log("Meno di 5");
  } else if (val < 10) {
      console.log("Meno di 10");
  } else {
      console.log("Uguale a 10 o maggiore");
  }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me);
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
delete me.lastName;
console.log(me);
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
me.skills.pop();
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
const arrayvuoto = [];
arrayvuoto.push(1,2,3,4,5,6,7,8,9,10);
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
arrayvuoto.splice(9, 10, 100);
*/