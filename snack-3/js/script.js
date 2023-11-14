/*
Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli

collego la pag

scrivo un numero

stampo

aggiungo nuovo numero

do proprietà alle classi

*/




const ouputElement = document.querySelector('#div.outputElement')
/* dichiaro elemento = seleziono elemento in html tramite query del selettore */


for (let output = 0; output <= 30 ; output += 3) {
/* do intervallo di ciclo*/
    
       const testoAttuale = outputElement.textContent;
/*variabile d'appoggio = elemento testuale nell html*/
       outputElement.textContent = testoAttuale + output ;
/*elemento testuale nell html = riempio la variabile d'appoggio con l'output del ciclo */
console.log(output);




}

