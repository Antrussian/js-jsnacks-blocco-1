/*Inserisci un <h1> al centro della pagina con un numero randomico all'interno e un bottone sotto.
 Ad ogni click del bottone aumento il numero nell'h1 di 3 e lo aggiorno in pagina.  */


 /*Inserisci un <h1> al centro della pagina con un numero randomico all'interno  */

let numeroCasuale = Math.floor(Math.random() * 100) + 1;


document.getElementById('output').innerHTML= numeroCasuale;






const buttonElement = document.getElementById('myButton');

/*ad ogni click del bottone */

buttonElement.addEventListener('click', function () {
    
/* aumento il numero nell'h1 di 3 e lo aggiorno in pagina*/
    numeroCasuale = numeroCasuale += 3;


    document.getElementById('output').innerHTML= numeroCasuale;

});



