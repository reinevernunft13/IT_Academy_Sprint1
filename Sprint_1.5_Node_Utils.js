//Nivell 1 Ex 1 - Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

const writeSomething = () => {
fs.writeFile('test.txt', `I'm feeling original today...So I'll say "Hello World!"`, (error) => {
  if(error) {
    console.log(`ERROR: ${error}`);
  } else {
    console.log('file created');
  }
})
}
//writeSomething();

//Nivell 1 Ex 2 - Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const printTest = () => {
fs.readFile('test.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(`ERROR: ${error}`);
  } else {
  console.log(data);
  }
}); 
}
//printTest(); 


// Nivell 1 Ex 3 - Crea una funció que comprimeixi el fitxer del nivell 1.

const zipFile = () => {
  const { pipeline } = require('stream');
  const fs = require('fs');
  const zlib = require('zlib');

pipeline(
  fs.createReadStream('test.txt'),
  zlib.createGzip(),
  fs.createWriteStream('test.txt.gz'),
  (err) => {
    if (err) {
      console.error('Oops! Something went wrong!', err);
    } else {
      console.log('Done');
    }
  }
);
}
//zipFile();

//Nivell 2 Ex 1 - Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

let repeat = () => {
  let i = 0
  setInterval(() => {
    console.log(`This has been printed ${i++} time/s...and I'm not going to stop!`);
  }, 1000)
}
//repeat();

//Nivell 2 Ex 2 - Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.

const subprocess = () => {
  exec('dir', (err, stdout, stderr) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
    if (stderr) {
      console.log('Standard Error: ', stderr);
      return;
    }
    console.log(stdout);
  })
}
//subprocess(); 

//Nivell 3 - Ex 1 - 
/*Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials.
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part. */

