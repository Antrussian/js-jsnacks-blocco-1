/* 

Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.





ciclare per i primi 100 numeri

inseriamo ogni mumero in un array

inseriamo solo i numeri che vogliamo in un array
*/




const outputArray = [];

for (let i = 1 ; i <= 100 ; i++ ) {

    if ( i % 7 === 0 || i % 8 === 0 ) {
    outputArray.push(i);
  
}




}


console.log(outputArray);








