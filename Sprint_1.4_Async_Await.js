//######################################## LEVEL 1 ######################################

/*Ex 1 - Create an async function that returns the id of an employee and logs their 
name and salary to the console. To do this, make use of the previously defined functions 
getEmployee() and getSalary().*/

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

/*Ex. 2 - Create another async function (AF). This AF must call another function that 
returns a promise whose resolve() function is executed 2 seconds after calling it. */

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

//####################################### LEVEL 2 #####################################
/*Ex 1 - Create a function that takes in a number n and returns, with a two-second delay, its double -- that is, 
the result of n x 2. Using this function, create yet another function that receives
three numbers and returns the sum of these three numbers. */

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

//##################################### LEVEL 3 #####################################

/* Ex 1 - Force and catch as many errors as possible from 1.4, levels 1 & 2. 

/* Already done. Errors are caught -- and handled -- by implementing a try-catch block in
each async function. This allows us to catch rejected promises and return the error message
specified in the promise reject() method. In particular, the catch() is executed
and an error message is returned in: 

-> Level 1, Ex 1. 
    If the value passed to asyncFunction(), when calling it, is not a number that
    matches an existing id.
   
-> Level 1, Ex 2.
   If the value passed to displayVal(), when calling it, is not "hola";

-> Level 2, Ex 1. 
    If the value passed to sumDoubles(), when calling it, is not a number. 

//Catalan version
/* Fet. Els errors es capturen i gestionen a través de cada .catch del bloc try-catch
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


