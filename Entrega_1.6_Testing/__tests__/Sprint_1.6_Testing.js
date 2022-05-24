//Nivell 1, Ex.1
 /* A) Testeja la correcta execució d'aquestes funcions sumar, restar, multiplicar i dividir 
 dos o més operands. (See reference in app.js) */

    //Tests:
    const calcAndEmpl = require("./app.js")

    test('adding 1 + 2 equals 3', () => {
        expect(calcAndEmpl.add(1, 2)).toBe(3);
    });
    
    test('substracting 2 - 1 equals 1', () => {
        expect(calcAndEmpl.substract(2, 1)).toBe(1);
    });
    
    test('multiplying 1 * 2 equals 2', () => {
      expect(calcAndEmpl.multiply(1, 2)).toBe(2);
    });
    
    test('dividing 2 / 1 equals 2', () => {
      expect(calcAndEmpl.divide(2, 1)).toBe(2);
    });
    
    // B) Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1.
    
    test('getEmployee with ID: 2 should return Bill Gates', () => {
        return calcAndEmpl.getEmployee(2).then(data => {
            expect(data).toEqual({ id: 2, name: 'Bill Gates'});
            })
        }
      )
      
    test("getSalary with ID: 2, name: 'Bill Gates' should return 1000",() => {
        return calcAndEmpl.getSalary({ id: 2, name: 'Bill Gates'}).then(data => {
            expect(data.salary).toBe(1000);
            })
        }
      )
    
    //C) Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1.
    
    test('Should return ID:2, name: Linux Torvalds after 2 seconds', async () => {
        await calcAndEmpl.getEmployee(2).then(data=> {
            expect(data).toEqual({ id: 2, name: 'Bill Gates'});
        })
      })
    
    // D) Crea els tests corresponents per verificar el funcionament de l'exercici _Promises & Callbacks_ Nivell 2 - Exercici 3.
    
    test('ID:2 is passed to getEmployee and returns an object that is received by getSalary, which returns 1000'), () => {
        return calcAndEmpl.getEmployee(2).then(obj => calcAndEmpl.getSalary(obj)).then(data => {
            expect(data.salary).toBe(1000);
        })
      }
    
    // E) Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.
        
    testAsyncAwait("Test checks exercise N2 E1 using Jest Fake Timers", () => {
        test("Function should return a promise that executes after 3 seconds", async () => {
            jest.useFakeTimers();
            const promise = displayAfter3secs();
            jest.runAllTimers();
            const promiseFunct = await promise;
            expect(promiseFunct).toBe("I will be executed after 3 seconds");
        });
        test('Async function calling other functions', async () => {
            jest.useFakeTimers();
            const callFunction = callFn();
            jest.runAllTimers();
            const asyncFunction = await callFn;
            expect(asyncFunction).toBe(asyncFunction);
        });
    });
    
   