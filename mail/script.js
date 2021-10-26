
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.

// GUEST EMAIL LIST
const guestEmail = ["rosso@bool.com", "green@bool.com","blue@bool.com", "black@bmail.com", "purple@bmail.com", "yellow@bmail.it"];
let userEmail = [];

console.log(guestEmail);

// ASK USER EMAIL
 userEmail.push(prompt("Inserici la tua email"));
// let userEmail = prompt("Inserici la tua email");

console.log(userEmail);


// COMPARE EMAIL WITH THE GUEST LIST

for (let i = 0; i < guestEmail.length; i++) {
    if(userEmail == guestEmail[i]){
        console.log("La tua mail corrisponde Benvenuto");
        break;
        

    } 
    // else {
    //     console.log("la tua email non corrisponde mi dispiace");
    // }

}

   


// PRINT A MESSAGE WITH THE RESULT OF THE CHECK
