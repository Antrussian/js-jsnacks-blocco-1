/*chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande*/








const etaPersona1 = parseInt(prompt('inserisci l eta della prima persona'));


const etaPersona2 = parseInt(prompt('inserisci l eta della seconda persona'));

let risultato;

if ( etaPersona1 > etaPersona2) {
    risultato = etaPersona1;
}

else if ( etaPersona2 > etaPersona1) {
    risultato = etaPersona2;
}

else  {
    risultato = 'L eta è uguale';
}



document.getElementById('output').innerHTML = 'Risultato = ' + risultato;



