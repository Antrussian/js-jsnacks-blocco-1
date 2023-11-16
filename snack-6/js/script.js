/*In un array
 sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), 

chiedi all'utente
 il suo nome
  e comunicagli 
  se può partecipare o no alla festa.*/

  
  const invitati = ['Antonio', 'Michela', 'Veronica', 'Giovanni', 'Nicola'];
  const nomeUtente = prompt("Inserisci il tuo nome:");
  
  let utenteInvitato = false;
  
  for (let i = 0; i < invitati.length; i++) {
      if (nomeUtente === invitati[i]) {
          utenteInvitato = true;
      }
  }
  
  if (utenteInvitato) {
    const outputElement = document.getElementById("output");
     outputElement.innerHTML = ("Benvenuto " + nomeUtente);
     
  } 
  else {
   
      const outputElement = document.getElementById("output");
      outputElement.innerHTML = ("Mi dispiace, non sei registrato " + nomeUtente);
  }
  

  