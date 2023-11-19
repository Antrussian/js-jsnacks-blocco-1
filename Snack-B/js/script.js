/*Chiedi un numero di 7 cifre all'utente
 e calcola la somma di tutte le cifre che compongono il numero.*/



let numero = prompt("Inserisci un numero di 7 cifre:");

if (numero.length === 7 && !isNaN(numero)) {
    
    let cifre = numero.split('').map(Number);

  
    let somma = cifre.reduce((acc, val) => acc + val, 0);


    console.log("La somma delle cifre è:", somma);
} else {
    console.log("Il numero inserito non è valido.");
}
