
const userChoice = (prompt("scegli se pari o dispari"));
const userNumber = parseInt(prompt("Dimmi un numero tra 1 e 5"));
console.log(userNumber);

// const result = oddEven (totalNumber)
// alert (result)


function winOrLose(answer) {
    

if (userNumber > 5 || userNumber <= 0) {
        parseInt (prompt("inserisci un valore corretto"))
}else{

}
const computerNumber = Math.floor(Math.random() * 5) + 1;
console.log(computerNumber);

const totalNumber = userNumber + computerNumber
console.log(totalNumber);

let result ="";
if (totalNumber % 2 === 0) {
    result = "pari"
}else{
    result = "dispari"
}

let answer = "";
if (userChoice === result) {
    answer = "hai vinto"
}else{
    answer = "hai perso"
}

console.log(answer);

}