// PROMPT DI RICHIESTA DATI UTENTE 
function Acquisizione() {

    let città = document.getElementById('città').value;
    let età = document.getElementById('age').value
    let prezzKm = 0.21;

    if (città == 'Taranto') {
        risultato = 350 * prezzKm;
    } 

    if (città == 'Roma') {
        risultato = 500 *  prezzKm;
    }

    if (città == 'Bologna' ) {
        risultato = 900 * prezzKm;
    } 
    
    if(!età){
    sconto=0;    
}

    else if (età<=18) {
        sconto = (risultato*20)/100;

    } else if (età>=65) {
        sconto = (risultato*40)/100; 
    }

    else{

    }
    totale= risultato - sconto;
    document.getElementById('risultato').innerHTML = risultato;
    document.getElementById('scontoapplicato').innerHTML= totale;
   

    }






