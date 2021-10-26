// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let userNum = document.getElementById("user-num");
let pcNum = document.getElementById("pc-num");
let result = document.getElementById("result");


// CREATE A RANDOM NUMBER (USER)
let randUserNum = Math.floor(Math.random() * 6) + 1;
console.log("numero user",randUserNum);
userNum.innerHTML = (randUserNum);

// CREATE A RANDOM NUMBER (PC)
let randPcNum = Math.floor(Math.random() * 6) + 1;
console.log("numero pc", randPcNum);
pcNum.innerHTML = (randPcNum);

// CHECK RANDOM NUMBERS
if(randUserNum > randPcNum){
    result.innerHTML = "Hai VINTO"
} else if (randUserNum < randPcNum) {
    result.innerHTML = "Hai PERSO"

} else{
    result.innerHTML = "PAREGGIO"
 
}

// PRINT THE RESULT