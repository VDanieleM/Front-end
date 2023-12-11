let xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books'); 
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log('The operation is complete');
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        console.log(obj);
        createList(obj).then(() => {
            cancella();
            aggiungiAlCarrello();
            visualizzaLista();
        });
    }
}

function createList(books) {
    return new Promise((resolve, reject) => {
        let div = document.querySelector('.row');
        books.forEach(u => {
            let carDiv = document.createElement('div'); 
            carDiv.className = "col-3";
            carDiv.innerHTML = `<div class="card my-5" style="width: 18rem; height: 95%;">
                <img src="`+u.img+`" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">`+u.title+`</h5>
                <a href="#" class="btn bg-black text-white p-0 m-0 mb-3">`+u.category+`</a>
                <p>`+u.price+`€</p>
                <div class="d-flex">
                <a href="#" class="btn bgP text-white me-2">Compra ora</a>
                <a href="#" class="btn purple bp">Scarta</a>
                </div>
              </div>
            </div>
          </div>`
            div.appendChild(carDiv);
        })
        resolve();
    });
}

function cancella() {
    let buttons = document.querySelectorAll('.card .bp'); // Seleziona tutti i bottoni all'interno delle cards
    console.log(buttons);
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let card = e.target.closest('.card'); // Trova la card più vicina al bottone cliccato
            card.remove(); // Rimuove la card
        });
    });
}

function aggiungiAlCarrello() {
    let buttons = document.querySelectorAll('.card .bgP'); // Seleziona tutti i bottoni "Compra ora"
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let card = e.target.closest('.card'); // Trova la card più vicina al bottone cliccato
            let title = card.querySelector('.card-title').textContent; // Ottieni il titolo del libro
            let price = card.querySelector('p').textContent; // Ottieni il prezzo del libro

            // Crea un oggetto per il libro
            let book = {
                title: title,
                price: price
            };

            // Ottieni la lista dei libri dal localStorage
            let bookList = JSON.parse(localStorage.getItem('bookList')) || [];

            // Aggiungi il libro alla lista
            bookList.push(book);

            // Salva la lista aggiornata nel localStorage
            localStorage.setItem('bookList', JSON.stringify(bookList));

            visualizzaLista();
        });
    });
}

function visualizzaLista() {
    let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'pt-5');
    let div = document.querySelector('.carrello');
    div.innerHTML = '';
    bookList.forEach((book, index) => {
      let li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = `${book.title} - ${book.price}`;
      ul.appendChild(li);
  
      let removeButton = document.createElement('button');
      removeButton.textContent = 'Rimuovi';
      removeButton.classList.add('btn', 'btn-danger', 'ms-2', 'float-end');
      removeButton.addEventListener('click', function() {
        bookList.splice(index, 1); // Rimuovi il libro dalla lista
        localStorage.setItem('bookList', JSON.stringify(bookList)); // Aggiorna il localStorage
        visualizzaLista(); // Aggiorna la visualizzazione
      });
      li.appendChild(removeButton);
    });
    div.appendChild(ul);
  }