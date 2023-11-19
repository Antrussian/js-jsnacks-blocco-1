/*Inserisci un <h1> al centro della pagina con un numero randomico all'interno e un bottone sotto.
 Ad ogni click del bottone aumento il numero nell'h1 di 3 e lo aggiorno in pagina.  */


 /*Inserisci un <h1> al centro della pagina con un numero randomico all'interno  */

let numeroCasuale = Math.floor(Math.random() * 100) + 1;


document.getElementById('output').innerHTML= numeroCasuale;




/*ad ogni click del bottone */

const buttonElement = document.getElementById('myButton');



buttonElement.addEventListener('click', function () {

    numeroCasuale = numeroCasuale += 3;


    document.getElementById('output').innerHTML= numeroCasuale;

});



/* aumento il numero nell'h1 di 3 e lo aggiorno in pagina*/