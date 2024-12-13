const inputField = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputField = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    let input = inputField.value;
    if(!isValidInput(input)) {
        return;
    }
    outputField.innerText = convertNumber(input);
});

function isValidInput(input) {
    if(input == "") {
        outputField.innerText = "Please enter a valid number";
    } else if (input < 1) {
        outputField.innerText = "Please enter a number greater than or equal to 1";
    } else if (input >= 4000) {
        outputField.innerText = "Please enter a number less than or equal to 3999";
    } else {
        return true;
    }
    return false;
}

function convertNumber(number) {
    let lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let roman = "";
    for (i in lookup) {
        while (number >= lookup[i]) {
            roman += i;
            number -= lookup[i];
        }
    }

    return roman;
}