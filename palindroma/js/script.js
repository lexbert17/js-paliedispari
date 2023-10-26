const userWord = prompt ("inserisci una parola");
console.log(userWord);

let letter ="";
let i ="";
for (let i = 0; i < userWord.length; i++) {
    const letter = userWord[i];
    console.log(letter);
}

let j = "";
let reversed ="";
for (let j = userWord.length - 1; j >= 0; j--) {
    const reversed = userWord [j];
    console.log(reversed, j); 
}




// /**
//  *
//  * @parm {parola}
//  * @return {string}
//  */
// function name(params) {
//     let result = "";

//     if (wordToTest ==) {
        
//     }
// }









