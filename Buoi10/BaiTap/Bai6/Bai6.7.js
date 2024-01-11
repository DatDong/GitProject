
function swapIntegers(a, b) {
    [a, b] = [b, a];
    
    return [a, b];
}

let number1 = 5;
let number2 = 10;

console.log(`Trước khi đổi chỗ: number1 = ${number1}, number2 = ${number2}`);

[number1, number2] = swapIntegers(number1, number2);

console.log(`Sau khi đổi chỗ: number1 = ${number1}, number2 = ${number2}`);
