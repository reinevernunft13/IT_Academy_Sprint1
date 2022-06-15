//Nivell 1 Ex 1 - Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

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
        let empFound = employees.find(employee => employee.id === id); 
        if(empFound) { 
            resolve(empFound); 
        } else {
            reject("Invalid ID. Please, try again.");
        }
    })
} 

let getSalary = employee => { 
    return new Promise((resolve, reject) => {
        let salFound = salaries.find(salary => salary.id === employee.id);  
        if(salFound) {
            resolve(salFound);
        } else {
            reject("Invalid ID. Please, try again.");
        }
    })
}

let asyncFunction = async (id) => {
    try {
        let empId = await getEmployee(id);
        let empSalary = await getSalary(empId);
        console.log(empSalary)
    } catch(err) {
        console.log(err);
    }
}
//console.log(asyncFunction(1)); 

//Nivell 1 Ex. 2 - Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

const delayedVal = (pw) => {
    return new Promise((resolve, reject) => {
        if (pw === "hola") {
            setTimeout (() => {
                resolve("Password is correct. Welcome.");
        }, 2000);
        } else {
            reject("Wrong password.");
        }
    });
}
const displayVal = async (pw) => {
    try {
        console.log ('Please, wait. This may take a couple of seconds...');
        let login = await delayedVal(pw);
        console.log(login);

    } catch(err) {
        console.log(err);
    }
}

//displayVal(1);
//displayVal("hola");

//Nivell 2 Ex 1 - Crea una funció que retorni el doble del número que se li passa com a paràmetre després de 2 segons. Crea una altra funció que rebi tres números i calculi la suma dels seus dobles usant la funció anterior.

const delayedDouble = (num) => {
    return new Promise ((resolve, reject) => {
        if (typeof num === 'number'){ 
            setTimeout(() => {
                resolve (num * 2)}, 2000);
        } else {
            reject('Error, input is not a number!');
        }
    });
}

const sumDoubles = async(num1, num2, num3) => {
    try {
    let myArr = [];
    myArr.push(num1,num2,num3);
    let sum = 0;
    
    for(const el of myArr) {
        let doubleNum = await delayedDouble(el);
        sum = sum + doubleNum;
    }
    return console.log(sum);
} catch(err) {
    console.log(err);
}
}
//sumDoubles(1,2,3);

//Nivell 3 Ex 1 - Força i captura tants errors com puguis dels nivells 1 i 2. 

/* Els errors es capturen i gestionen a través de cada .catch del bloc try-catch
en la funció asíncrona que ens permet retornar el missatge d'error del reject de 
la promise. En concret:

-> A l'exercici N1-1, el .catch retorna el missatge d'error quan, en invocar
asyncFunc(), li passem com a argument qualsevol valor que no es correspongui amb un 
id existent. Així, ens donarà error tant si introduïm un número que no es correspon amb
un id existent com si li passem un valor que no sigui de tipus number. 
-> A l'exercici N1-2, el .catch retorna el missatge d'error quan, al invocar displayVal(), 
li passem com a argument qualsevol valor que no sigui "hola"; 
-> A l'exercici N2-1, el .catch retorna missatge d'error quan l'input quan, al invocar
sumDoubles(), li passem com argument un valor que no és de tipus 'number';

*/


