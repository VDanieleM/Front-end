      /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

        const changeTitle = function () {
        let h1 = document.querySelector("h1")
        h1.innerText = "Titolo Modificato";
        };
        changeTitle();

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
        const addClassToTitle = function () {
        let h1 = document.querySelector("h1")
        h1.classList.add("myHeading");
        };
        addClassToTitle();
        
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        let change = document.querySelectorAll("div > p").forEach(p => {p.innerText = "Testo modificato"});
       }
       changePcontent();
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        let change = document.querySelectorAll("a:not(footer a)");
        change.forEach(change => {
          change.href = "https://www.google.com/";
        });
        }
  
        changeUrls();

       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
        const addToTheSecond = function () {
            let li = document.createElement("li");
            li.innerText = "4th";
            document.querySelector("#secondList").appendChild(li);
          };
    
          addToTheSecond();
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        let par = document.createElement("p");
        par.innerText = "NUOVO PARAGRAFO";
        document.querySelector("div").appendChild(par);

       }
       addParagraph();
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {
        document.querySelector("#firstList").style.visibility = "hidden"
       }
       hideFirstUl();
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
const paintItGreen = function () {
      let one = document.querySelector("#secondList").style.backgroundColor = "green";
      let two = document.querySelector("#firstList").style.backgroundColor = "green";
    }
       paintItGreen();
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
        let h1 = document.querySelector("h1");
        h1.innerText = h1.innerText.slice(0, -1)
      }
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        let linkReveal = document.querySelector("footer a");
        alert(linkReveal.href);
       }

       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
        const generateTable = function () {
            let tab = document.createElement("table");
            let headers = ["immagine", "nome prodotto", "quantità", "prezzo"];

            let tr = document.createElement("tr");
            for (let i = 0; i < headers.length; i++) {
                let th = document.createElement("th");
                th.innerText = headers[i];
                tr.appendChild(th);
            }
            tab.appendChild(tr);
            document.body.appendChild(tab);
           }
           generateTable();

       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
       addRow();

       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
       hideAllImages();

       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
       changeColorWithRandom();

       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}
       deleteVowels();