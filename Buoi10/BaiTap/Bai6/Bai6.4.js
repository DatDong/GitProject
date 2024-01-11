
function isNumeric(character) {
    return !isNaN(character);
}

const inputChar = '5';
const isNumber = isNumeric(inputChar);
if (isNumber) {
    console.log(`${inputChar} là một ký tự số.`);
} else {
    console.log(`${inputChar} không phải là ký tự số.`);
}
