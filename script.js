const passWordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allChar = upperCase + lowerCase + numbers + symbols;

//to generate Random password
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(lenght > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passWordBox.value = password;
}

//to copy password
function copyPassword(){
    passWordBox.select();
    document.execCommand("copy");
}