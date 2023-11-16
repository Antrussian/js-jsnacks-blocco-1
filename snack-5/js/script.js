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
    paroLunga = parola2;
}

console.log("parola più corta" + parolaCorta);
console.log("parola più corta" + parolaLunga);