/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let l1 = Number(prompt("Inserisci l'altezza del rettangolo"));
let l2 = Number(prompt("Inserisci la base del rettangolo"));
let area = (l1, l2) => {let moltiplicazione = l1*l2; console.log(moltiplicazione); return moltiplicazione};
area() */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let l3 = parseInt(prompt("Inserisci un numero"));
let l4 = parseInt(prompt("Inserisci un'altro numero"));
let crazySum = () => {let result; if (l3 !== l4){result = l3+l4}else{result = (l3+l4)*3}; console.log(result); return result};
crazySum(); */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let l5 = prompt("Inserisci un numero");
let crazyDiff = () => {let diff; if (l5>19){diff = Math.abs(l5-19)}{diff = Math.abs((l5-19)*3)}; console.log(diff); return diff};
crazyDiff(); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let number = parseInt(prompt("Inserisci un numero"));
let boundary = () => {let result; if ((number >= 20 && number <= 100) || number === 400){result = true}else{result = false}; console.log(result); return result};
boundary(); */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* let stringa = prompt("Inserisci una stringa");
let epify = () => {
    let result; 
    if (stringa.replace(/ .*/ /*,'') === "EPICODE")
    {result = stringa
    }else
    {result = "EPICODE " + stringa};
    console.log(result);
    return result};
epify(); */


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let numeropositivo = prompt("inserisci un numero positivo");
let check3and7 = () => {
        if (numeropositivo >= 0 && (numeropositivo % 3 === 0 || numeropositivo % 7 === 0)) {
            console.log("Il numero è divisibile per 3 o 7");
        } else 
        {console.log("Il numero non è divisibile per 3 o 7");
        };}
check3and7(); */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let stringa = "EPICODE";
let reverseString = () => {
    let stringaDivisa = stringa.split("");
    let stringaInversa = stringaDivisa.reverse();
    let stringaInversaIntera = stringaInversa.join("");
    return console.log(stringaInversaIntera);
}
reverseString (); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let parole = prompt("Inserisci delle parole");
let upperFirst = () => {
    let array = parole.split(" ");

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
    }

    return console.log(array.join(" "));
};

upperFirst (); */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let parole = prompt("Inserisci delle parole");
let cutString =  () => {
    let paroleTagliate = parole.slice(1).slice(-0, -1);
    console.log(paroleTagliate);
};

cutString (); */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let n = parseInt(prompt("Inserisci un numero"));
let giveMeRandom = () => {
    array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random()*11));
    }
    return console.log(array);
};

giveMeRandom (); */