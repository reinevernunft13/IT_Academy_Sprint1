//Nivell 1, Ex. 1 - Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

console.log(((num1, num2) => num1 + num2)(2,3));

//Nivell 2, Ex. 1 - Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

let makePerson = (name) => { 
    let person = { 
        attribute : name,
    }
    return person; 
    };

console.log(makePerson("Antonia"));

//Nivell 2, Ex. 2 - Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        return `My name is ${this.name}`;
    }
}
let persona1 = new Person("Omaíta"); 
console.log(persona1.sayName());

//Nivell 3, Ex. 1 - Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

//abstract class
class Citizen {
    constructor() {
      if (this.constructor == Citizen) {
        throw new Error("Abstract classes cannot be instantiated.");
      }
    }
    greet() {
      throw new Error("Abstract method has no implementation.");
    }
  }
//Creates concrete classes
  class Australian extends Citizen {
    greet() {
      console.log("Hello! How are you?");
    }
  }

  class German extends Citizen {
    greet() {
      console.log("Hallo! Wie geht's dir?");
    }
  }

  class Spaniard extends Citizen {
      greet() {
          console.log("Hola! Qué tal?");
      }
  }
//instantiates concrete classes
let sarah = new Australian();
sarah.greet();
let ulrike = new German();
ulrike.greet();
let alba = new Spaniard();
alba.greet();

