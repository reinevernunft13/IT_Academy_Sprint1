//Sprint 1.3: 'Promises and Callbacks'

//**LEVEL 1**

/*Ex 1 - Create a function that returns a Promise. This promise will call resolve() 
or reject(), depending on its result -- i.e. sucess or failure.*/

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

/*Ex2 - Create an arrow function that takes a parameter and a callback function. This will 
pass one message or another (to be logged to the console) to the other function, 
depending on the parameter.*/

//callback function
const instructions = message => console.log(`Hey, ${message}`);

const trafficLight = (light, callback) => {
    if(light === "red") {
        callback("stop! Red light on.");
    }
    if(light === "green") {
        callback("you can now go!");
    }
}

trafficLight("red", instructions);
trafficLight("green", instructions);

//**LEVEL 2** 

/*Ex 1 - Given the array of objects 'employees' and 'salaries' below, create an arrow function called getEmployee()
that returns a Promise that, when resolved, prints an employee object. The employee must be searched by the
property 'id'.*/

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
            resolve(empFound);
        } else {
            reject('Sorry, employee not found.');
        }
    })
} 

getEmployee(2)
.then(res => console.log(res))
.catch(err => console.log(err));

/*Ex 2 - Create a similar arrow function called getSalary() that takes an employee object as a parameter 
and returns their salary.*/

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let salFound = salaries.find(el => el.id == employee.id);
                if(salFound) {
                    resolve (`The salary for this employee is: ${salFound.salary}`);
                } else {
                    reject('Sorry, employee not found.');
        }
    });
}
getSalary({
    id: 2,
    name: 'Bill Gates'})
    .then(res => console.log(res))
    .catch(error => console.log (error));

/*Ex. 3 - Call getEmployee() and then getSalary by nesting their execution, so that 
the employee name is to the console first and then their salary. */

let id = 1; 

getEmployee(id)
    .then((res) => {
        getSalary(res)
        .then((salary) => {
            console.log(`EMPLOYEE NAME: ${res.name}; SALARY: ${salary}`)
    })
});

//**LEVEL 3** 

/*Ex. 1 - Add a .catch() method to the previous exercise in order to handle any errors.*/  

id = 0; 

 getEmployee(id)
 .then((res) => {
     getSalary(res)
     .then((salary) => {
         console.log(`EMPLOYEE NAME: ${res.name}; SALARY: ${salary}`)
 });
})
 .catch((error) => {
     console.log(error)
    });

