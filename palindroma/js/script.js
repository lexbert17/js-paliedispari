/**
 * ${1:Description placeholder}
 * @date 26/10/2023 - 20:56:32
 *
 * @type {*}
 */
const userWord = prompt ("inserisci una parola");
console.log(userWord);

/**
 * ${1:Description placeholder}
 * @date 26/10/2023 - 20:56:32
 *
 * @type {string}
 */
let letter ="";
/**
 * ${1:Description placeholder}
 * @date 26/10/2023 - 20:56:32
 *
 * @type {string}
 */
let i ="";
for (let i = 0; i < userWord.length; i++) {
    const letter = userWord[i];
    console.log(letter);
}

/**
 * ${1:Description placeholder}
 * @date 26/10/2023 - 20:56:32
 *
 * @type {string}
 */
let j = "";
/**
 * ${1:Description placeholder}
 * @date 26/10/2023 - 20:56:31
 *
 * @type {string}
 */
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









