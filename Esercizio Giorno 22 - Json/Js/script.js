let i = 0;

document.querySelector('#salva').addEventListener('click', () => {
    let username = document.querySelector('input');

    let p = document.createElement('p');
    p.innerText = username.value;
    document.querySelector('#nome').appendChild(p);

    localStorage.setItem(`username${i}`, username.value);
    i++;

    username.value = '';
})

document.querySelector('#cancella').addEventListener('click', () => {
    document.querySelector('#nome p:last-child').remove();
    localStorage.removeItem(`username${i -1}`);
    i--;

    if (`username${i}` === `username0`) {
        localStorage.clear();
    }
})

function updateCounter() {
    // Recupera il valore corrente dal sessionStorage
    let currentValue = sessionStorage.getItem('counterValue');
  
    // Se il valore non esiste, imposta il valore iniziale a 0
    let newValue = (currentValue ? parseInt(currentValue, 10) : 0) + 1;
  
    // Aggiorna il valore nel sessionStorage
    sessionStorage.setItem('counterValue', newValue);
  
    // Aggiorna il display del contatore
    document.querySelector('#counter').textContent = 'Tempo trascorso: ' + newValue + ' secondi';
  
    // Richiama la funzione ogni secondo
    setTimeout(updateCounter, 1000);
  }
  
  // Avvia l'aggiornamento del contatore
  updateCounter();