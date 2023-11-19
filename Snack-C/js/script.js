/*Chiedi all'utente due numeri,
 uno piu' piccolo (due cifre) e
  uno piu' grande (almeno quattro cifre):
 moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.*/


let numeroPiccolo = parseInt(prompt("Inserisci un numero di 2 cifre:"));
let numeroGrande = parseInt(prompt("Inserisci un numero di 4 cifre:"));

let risultato;


for (risultato = numeroPiccolo; risultato <= numeroGrande; ) {

  if (risultato <= numeroGrande) {
    risultato *= 2;
  } 
  else {

    break;
  }
}


console.log("Risultato:", risultato);



