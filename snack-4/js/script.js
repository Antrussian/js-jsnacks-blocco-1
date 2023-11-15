/* 

Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.
*/




  
const wrapperElement=document.querySelector('div.wrapper');
const outputArray = [];
for (let output = 0 ; output <= 100 ; output++ ) {
/* do intervallo di ciclo*/
  

/* creo elementi nell'html*/




/* per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/
    if (output % 7 === 0 ) {
        console.log(output, outputArray[output]);
   
       
        

    }
/*per i multipli di 3 stampi “Fizz” al posto del numero*/
    else if (output % 8 === 0 )  {
        console.log(output, outputArray[output]);
      
    }
/* per i multipli di 5 stampi “Buzz” al posto del numero*/




    else {
        console.log(output, outputArray[output]);
       

    }


    
    
    
   

}











