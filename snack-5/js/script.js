/*

L'utente inserisce due parole in successione, con due prompt.

Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const parola1 = prompt ('inserisci parola 1');
const parola2 = prompt ('inserisci parola 2');

const lunghezzaparola1 = parola1.length;
const lunghezzaparola2 = parola2.length;

let parolaCorta;
let parolaLunga;

if ( lunghezzaparola1 > lunghezzaparola2 ){
    parolaCorta = parola1;
}

else {
    parolaLunga = parola2;
}


document.getElementById('parola_Corta').innerHTML = 'Risultato = ' + parolaCorta;

document.getElementById('parola_Lunga').innerHTML = 'Risultato = ' + parolaLunga;



