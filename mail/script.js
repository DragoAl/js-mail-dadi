
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.

let emailBox = document.getElementById("email");
// GUEST EMAIL LIST
const guestEmail = ["rosso@bool.com", "green@bool.com","blue@bool.com", "black@bmail.com", "purple@bmail.com", "yellow@bmail.it"];

console.log(guestEmail);

// ASK USER EMAIL
let userEmail = prompt("Inserici la tua email");

console.log(userEmail);

// COMPARE EMAIL WITH THE GUEST LIST
let findEmail = false
for (let i = 0; i < guestEmail.length; i++) {
    if(userEmail === guestEmail[i]){
        // console.log("La tua mail corrisponde Benvenuto");
        findEmail = true;         
    } 
}

// PRINT A MESSAGE WITH THE RESULT OF THE CHECK

if(findEmail === true){
    console.log("email trovata");
    emailBox.innerHTML = ("email trovata")
    

}else {
    console.log("email non trovata");
    emailBox.innerHTML = ("email non trovata")
}

   


