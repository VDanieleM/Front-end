class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }


    confronto(persona) {
        if(this.age > persona.age) {
            return this.firstName + ' è più vecchio di ' + persona.firstName;
        } else if(this.age < persona.age) {
            return persona.firstName + ' è più vecchio di ' + this.firstName;
        } else {
            return persona.firstName + ' ha la stessa età di ' + this.firstName;
        }
    }
}

let m = new User('Mario', 'Rossi', 29, 'Roma');
let g = new User('Giuseppe', 'Verdi', 31, 'Milano');
let f = new User('Francesca', 'Neri', 29, 'Napoli');

console.log(m.confronto(g));
console.log(f.confronto(m));
console.log(g.confronto(f));


class Pet {
    static count = 0;
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
        Pet.count++;
    }

    ownerNameTest(pet) {
        if (pet.ownerName === this.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

let p1 = new Pet ('Bobby', 'Mario Rossi', 'cane', 'labrador');
let p2 = new Pet ('Billy', 'Giuseppe Verdi', 'gatto', 'soriano');

console.log(p1.ownerNameTest(p2));

let formBtn = document.querySelector('#petForm button');
formBtn.addEventListener('click', ()=> {
/*     let f = document.forms;
    let f = document.querySelector('#petForm form'); */
    let f = document.querySelectorAll('#petForm input, #petForm select');
    let petName = f[0].value;
    let ownerName = f[1].value;
    let species = f[2].value;
    let breed = f[3].value;
    console.log(petName, ownerName, species, breed);

    let p = new Pet(petName, ownerName, species, breed);
    addList(p);

/*     let p = new Pet(f[0].value, f[1].value, f[2].value, f[3].value);
    console.log(p); */

}
)

function addList(p) {
    let ul = document.querySelector('#listPet ul')
    let li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerHTML = `<b>PetName:</b> ${p.petName} <b>ownerName:</b> ${p.ownerName} <b>Species:</b> ${p.species} <b>Breed:</b> ${p.breed};`
    ul.appendChild(li);

    document.querySelector('#totale').innerText = Pet.count;
}