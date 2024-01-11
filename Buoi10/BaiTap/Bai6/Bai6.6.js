
function isPositiveInteger(number) {
    return Number.isInteger(number) && number > 0;
}

const testNumber = 42;
const result = isPositiveInteger(testNumber);

if (result) {
    console.log(`${testNumber} là số nguyên dương.`);
} else {
    console.log(`${testNumber} không phải là số nguyên dương.`);
}