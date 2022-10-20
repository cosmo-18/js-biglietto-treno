// PROMPT DI RICHIESTA DATI UTENTE 

let destinazione, età;

destinazione = prompt('Inserisci la tua destinazione');
età = prompt('Inserisci la tua età');

console.log(`${destinazione} ${età}`);

document.getElementById("stampa del biglietto").innerHTML = (`${destinazione} ${età}`);

// COMPILAZIONE DEL CALCOLO DEL BIGLIETTO E DEL RELATIVO SCONTO

