// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let giveMeRandom = () => {
    array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random()*11));
    }
    console.log(array)
    return array;
};

let checkArray = (x) => {
    const valoriMaggiori = [];
    for (let i = 0; i < x.length; i++) {
        const valore = x[i];
        if (valore > 5) {
            console.log(valore + " è maggiore di 5"); valoriMaggiori.push(valore);
        } else if (valore === 5) {
            console.log(valore + " è uguale a 5")
        } else
        { console.log (valore + " è minore di 5")}
    }
    
    let sum = 0
    let valorisommati = valoriMaggiori.forEach(item => {
        sum += item;});

    return sum;
};

const randomArray = giveMeRandom();
console.log(randomArray);
console.log(giveMeRandom);
checkArray (randomArray);
console.log(checkArray(randomArray)); */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* shoppingCart = [
    {
        nome: "Oggetto uno",
        price: 45,
        quantity: 2,
        id: 34234
    },
    {
        nome: "Oggetto due",
        price: 53,
        quantity: 4,
        id: 34334
    },
    {
        nome: "Oggetto tre",
        price: 21,
        quantity: 10,
        id: 34244
    }
];

let shoppingCartTotal = () => {
    let sum = 0
    let somma = shoppingCart.forEach(item => {
        sum += (item.price)*(item.quantity);});
    console.log(sum);
};
shoppingCartTotal(); */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* shoppingCart = [
    {
        nome: "Oggetto uno",
        price: 45,
        quantity: 2,
        id: 34234
    },
    {
        nome: "Oggetto due",
        price: 53,
        quantity: 4,
        id: 34334
    },
    {
        nome: "Oggetto tre",
        price: 21,
        quantity: 10,
        id: 34244
    }
];

let nuovoOggetto = {
    nome: "Oggetto quattro",
    price: 46,
    quantity: 3,
    id: 34264
};

let addToShoppingCart = () => {
    shoppingCart.push(nuovoOggetto);
    console.log(shoppingCart.length)
};

addToShoppingCart(); */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* shoppingCart = [
    {
        nome: "Oggetto uno",
        price: 45,
        quantity: 2,
        id: 34234
    },
    {
        nome: "Oggetto due",
        price: 53,
        quantity: 4,
        id: 34334
    },
    {
        nome: "Oggetto tre",
        price: 21,
        quantity: 10,
        id: 34244
    }
];

let maxShoppingCart = (x) => {
    let oggettoCostoso = shoppingCart[0];
    for (let i = 1; i < x.length; i++) {
        if (x[i].price > oggettoCostoso.price) {
            oggettoCostoso = x[i];
        }
    }

    return oggettoCostoso;
};

maxShoppingCart(shoppingCart);
console.log(maxShoppingCart(shoppingCart)) */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* shoppingCart = [
    {
        nome: "Oggetto uno",
        price: 45,
        quantity: 2,
        id: 34234
    },
    {
        nome: "Oggetto due",
        price: 53,
        quantity: 4,
        id: 34334
    },
    {
        nome: "Oggetto tre",
        price: 21,
        quantity: 10,
        id: 34244
    }
];

let latestShoppingCart = () => {
    const ultimoOggetto = shoppingCart[shoppingCart.length - 1];
    return ultimoOggetto;
}
latestShoppingCart(shoppingCart);
console.log (latestShoppingCart(shoppingCart)); */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function loopUntil(x) {
    let count = 0;
    while (count < 3) {
        const randomNumber = Math.floor(Math.random() * 10);
        console.log(randomNumber);
        if (randomNumber > x) {
            count++;
        } else {
            count = 0;
        }
    }
}

const number = 5;
loopUntil(number); */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let array = [10, "parole", 15, 17, 20, "cose", 6]
function calculateAverage(array) {
    let numbersArray= []
    let total = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            numbersArray.push(array[i])}
    }
    console.log(numbersArray)

    numbersArray.forEach((item) => {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(array)); */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let array = ["sono", "una serie", "di parole", "in un array"]
let longest = (array) => {
    let longestString = array[0];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].length > longestString.length) {
            longestString = array[i];
        }
    }

    return longestString;
}

console.log(longest(array)); */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function antiSpamFilter(emailContent) {
    const forbiddenWords = ["SPAM", "SCAM"];
    for (let i = 0; i < forbiddenWords.length; i++) {
        if (emailContent.includes(forbiddenWords[i])) {
            return false;
        }
    }
    return true;
}

const emailContent1 = "Questo è un'email legittima";
const emailContent2 = "Contenuto SPAM da evitare";

console.log(antiSpamFilter(emailContent1));
console.log(antiSpamFilter(emailContent2)); */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function giorniPassati(data) {
    const dataInserita = new Date(data).getTime();
    
    const dataCorrente = new Date().getTime();

    const differenzaInMillisecondi = dataCorrente - dataInserita;

    const millisecondiInUnGiorno = 1000 * 60 * 60 * 24;
    const giorniTrascorsi = Math.floor(differenzaInMillisecondi / millisecondiInUnGiorno);

    return giorniTrascorsi;
}

const dataIniziale = "2023-10-01";
const giorniTrascorsi = giorniPassati(dataIniziale);
console.log(giorniTrascorsi); */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function matrixGenerator(x, y) {
    const matrix = [];
    for (let i = 0; i < x; i++) {
        const row = [];
        for (let j = 0; j < y; j++) {
            row.push(`${i}${j}`);
        }
        matrix.push(row);
    }
    return matrix;
}

const resultMatrix = matrixGenerator(3, 2);
console.log(resultMatrix);
 */