
// Inverta a string. Crie uma função que recebe uma string como parâmetro de 
// entrada e retorna essa string escrita da forma invertida. 
// Por exemplo:

// Adriana -> anairdA
// Gorila -> aliroG


// BÔNUS:
// É palíndromo? Palindromo é quando uma palavra ou frase pode ser lida de trás para 
// frente e ainda continua igual.
// Por exemplo: osso 
// Faça uma função chamada 'palindrome', que usa a função 'reverseString' para 
// inverter a string e que depois valida se é uma palavra palíndroma, retornando 
// true ou false.


const exampleString = 'Gorila';

function reverseString(string) {
    let reversedString = '';
    for(let i = string.length -1; i >= 0; i--) {
        reversedString = reversedString + string[i];
    }
   return reversedString;
}

reverseString(exampleString);

// --------

const examplePalindrome = "reviver";

function palindrome(string) {
    const reversedString = reverseString(examplePalindrome);
    console.log("complete com o código aqui! :)");
}


// ________________________ TEST ________________________
console.log('TEST:');

if (reverseString(exampleString) == 'aliroG') {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}


console.log('TEST, is it palindrome?');
if (palindrome(examplePalindrome)) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________
