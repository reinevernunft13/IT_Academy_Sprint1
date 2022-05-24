//Sprint 1.3.
//Nivell 1. Ex 1 - Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
function doHomework() {
    return new Promise((resolve, reject) => {
        let homeworkDone = true;
        if(homeworkDone) {
            resolve("Well done!");
        } else {
            reject("Keep trying!");
        }
    });
}
doHomework()
    .then(res => console.log(res))
    .catch(err => console.log(err)); 

//Nivell 1. Ex 2 - Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

function isOdd(num) {
    if(num % 2 === 0) {
        console.log("El número és parell");
    } else {
        console.log("El número és imparell");
    }
}

function typeOfNum(num, fn) {
    fn(num);
} 

typeOfNum(22, isOdd);

//Nivell 2 Ex 1 - Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmployee = id => {
    return new Promise((resolve, reject) => {
        let empFound = employees.find(elem => elem.id === id);
        if(empFound) {
            resolve(empFound.name);
        } else {
            reject("Invalid ID. Please, try again.");
        }
    })
} 
getEmployee(1)
.then(res => console.log(`Full name of employee with ID# ${id} is ${res}`))
.catch(err => console.log(err))

//Nivell 2 Ex 2 - Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

let getSalary = id => {
    return new Promise((resolve, reject) => {
        let salFound = salaries.find(elem => elem.id === id);
        if(salFound) {
            resolve(salFound.salary);
        } else {
            reject("Invalid ID. Please, try again.");
        }
    })
}
getSalary(2)
    .then(res => console.log(`Employee with ID# ${id} earns a monthly salary of ${res}.`))
    .catch(err => console.log(err));

//Nivell 2 Ex. 3 - Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat i el seu salari.
//NB: calling the fn getSalary(id) instead of returning it will return undefined value for sal

let id = 3

getEmployee(id)
.then(name => {
    console.log(`Employee with ID# ${id} is ${name}.`);
    return getSalary(id); 
}).then(sal => {
    console.log(`Employee with ID# ${id} earns a monthly salary of ${sal}.`);
}) 

//Nivell 3 Ex. 1 - Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

//let id = 2;
getEmployee(id).then(name => {
    console.log(`Employee with ID# ${id} is ${name}.`);
    return getSalary(id);
}).then(sal => {
    console.log(`Employee with ID# ${id} earns a monthly salary of ${sal}.`);
}).catch(err => {
    console.log(err);
});
