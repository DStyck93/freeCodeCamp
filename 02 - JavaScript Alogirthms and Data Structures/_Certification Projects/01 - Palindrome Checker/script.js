const inputField = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultField = document.getElementById("result");

checkBtn.addEventListener("click", check);

function check() {
    let input = inputField.value;
    if (input == "") {
        alert("Please input a value");
        resultField.textContent = 'Please input a value above and click "Check".';
    } else {
        if (isPalindrome(input)) {
            resultField.textContent = `${input} is a palindrome`;
        } else {
            resultField.textContent = `${input} is not a palindrome`;
        }
    }
}

function isPalindrome(text) {
    // Clean up text: Remove spaces, punctuation marks, and make lowercase.
    let cleanedText = text.replace(/[\s\.,!\?_\(\);\+\*\|\\:\/\-]/g, ""); 
    cleanedText = cleanedText.toLowerCase();

    // Create a reversed string
    let backwards = "";
    for (let i = cleanedText.length - 1; i >= 0; i--) {
        backwards += cleanedText.charAt(i);
    }

    return cleanedText == backwards;
}