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
        let empFound = employees.find(elem => elem.id === id); //checks whether an object employee exists using its ID.
        if(empFound) { 
            resolve(empFound); //returns the employee with the ID.
        } else {
            reject("Invalid ID. Please, try again.");
        }
    })
} 

let getSalary = employee => { //Objeto del array employees que me haya dado getEmployee
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
        let empSalary = await getSalary(empId); //
        console.log(empSalary)
    } catch(err) {
        console.log(err);
    }

}
console.log(asyncFunction(3)); 

//Nivell 1 Ex. 2 - Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

const functionSTO = () => {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('I am being executed after 3 seconds');
        }, 3000);
    });
    return promise1;
};

const callFn = async () => {
    try {
        const mostrar = await functionSTO();
    } catch (err) {
        console.log(err);
    }
};

//Nivell 2 Ex 1 - Crea una funció que retorni el doble del número que se li passa com a paràmetre després de 2 segons. Crea una altra funció que rebi tres números i calculi la suma dels seus dobles usant la funció anterior.

/* IN PROGRESS
const multiplyByTwo = (num, callback) => {
    const res = num * 2;
    return setTimeout(() => {
        callback(res)
}, 2000)
    };
*/
//Nivell 3 Ex 1 - Força i captura tants errors com puguis dels nivells 1 i 2. 







