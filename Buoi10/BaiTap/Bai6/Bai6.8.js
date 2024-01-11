
function reverseArray(arr) {
    return arr.reverse();
}
const originalArray = [1, 2, 3, 4, 5];

console.log(`Mảng trước khi đảo ngược: ${originalArray}`);

const reversedArray = reverseArray(originalArray);

console.log(`Mảng sau khi đảo ngược: ${reversedArray}`);
