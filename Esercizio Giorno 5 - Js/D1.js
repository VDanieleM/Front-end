/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* In javascript esistono tre tipi di datatype differenti:
let testo = "ciao a tutti"
Il dato stringa possono essere sia una sola lettere o parole o frasi che si scrivono sempre tra due apici

let numero = "234"
Il dato numerico è un numero che può essere sia intero che decimale, per esempio 10 e 10.5 sono sempre datatype numerici senza distinzione

let veroOFalso = "true"
Il dato booleano è un dato che ammette solo vero o falso, true o false come risposta, serve principalmente a controllare quando un codice deve attivarsi o meno */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let name = "Daniele";
console.log(name); */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let num4 = 12 + 20;
console.log(num4) */

/* let num1 = 12;
let num2 = 20;
let num3 = num1 + num2;
console.log(num3); */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let x;
x = 12;
console.log(x); */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* name = "Maiellaro";
const SURNAME = "Maiellaro";
SURNAME = "Daniele";
console.log(name);
console.log(surname); /*

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let sottrazione = 4 - x;
console.log(sottrazione); */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  let name1
let name2
name1 =  "jhon"
name2 = "Jhon"
let uguaglianza = (name1 !== name2) ? "true" : "false";
console.log(uguaglianza); */

/* let name2low = name2.toLowerCase();
let uguaglianza = (name1 === name2low) ? "true" : "false";
console.log(uguaglianza); */