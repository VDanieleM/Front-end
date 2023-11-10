let nSelezionati = [];

let table = () => {
    let table = document.querySelector("#tabella");
    for (let i = 1; i <= 76; i++) {
        let cella = document.createElement("div");
        cella.innerText= [i]
        cella.className = "cellaTabellone";
        table.appendChild(cella);
    }
}
table();

let estrazione = () => {
    let button = document.querySelector("#estrazione");
    button.addEventListener("click", () => {
        let numeroEstratto = Math.ceil(Math.random()*76)
        console.log(numeroEstratto);
        let nSelezionati = document.querySelectorAll("#tabella div")
        nSelezionati.forEach(cella => {
            nSelezionati[numeroEstratto-1].style.backgroundColor = "rgba(228, 228, 228, 0.163)";
        })
    });
}
estrazione();