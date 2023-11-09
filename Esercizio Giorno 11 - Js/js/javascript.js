/*

let bt1 = document.querySelector('button')
bt1.addEventListener('click', (evt) => {
    console.log(evt.target)
    //alert('btn1')
})
*/

let table = document.querySelector('table');
table.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('deleteButton')) {
        evt.target.parentNode.parentNode.remove();
    } else {
        let tr = evt.target.parentNode;
        tr.style.textDecoration = "line-through";
    }
});

document.querySelector("#addButton").addEventListener("click", () => {
    let newTask = document.querySelector("#newTask");
    if(newTask.value.trim().length < 2) {
        alert("task empty");
    } else {
    let task = document.querySelector("#newTask");
    let newTask = task.value;
    addRow(newTask);
}});

const addRow = function (newTask) {
    let table = document.querySelector("table");
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let deButton = document.createElement('button')
    deButton.className = 'deleteButton';
    deButton.innerText = 'Delete';
    td2.innerText = newTask;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td3.appendChild(deButton); 
    table.appendChild(tr);
};
