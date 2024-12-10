const character = "#";
const count = 8;
const rows = [];
let inverted = true;

// Adds space to beginning and end of each row.
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Add Padding
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

// Build Pyramid
let result = "";
for (const row of rows) {
    result = result + row + "\n";
}

// Display Pyramid
console.log(result);