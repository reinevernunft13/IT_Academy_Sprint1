//Nivell 1 Ex. 1 - Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.

function printUserName(name) {
    console.log("The user's name is " + name);
}
printUserName("Cristina");

//Nivell 2 Ex. 1 - Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

let firstName = "Paquita";
let lastName = "Salas";
console.log(`The user's name is ${firstName} ${lastName}.`);

//Nivell 2 Ex. 2 - Invoca una funció que retorni un valor des de dins d'una template literal.

function returnValue(value) {
   
    return `I'm returning a value, which is of type string: ${value}`;
}
//calls function and prints returned value
console.log(returnValue(5));

//Nivell 3 Ex. 1 - Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

let functArray = [];
//Function
function countToNine(){
for(let i = 0; i < 10; i++) {
    console.log(i);
    }
}
//Adds countToNince() 
while(functArray.length < 10) {
    functArray.push(countToNine);
}

//Executes function countToNine 10 times
for(let i = 0; i < 10; i++) {
    let func = functArray[i]; //gets current function-element getting looped and save as a variable in order to be able to call it;
    func();    
}

//Nivell 3 Ex. 2 - Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre.
let showName = (function(name) {
    console.log(`This is the user's name: ${name}`);
})("Cristina"); 







