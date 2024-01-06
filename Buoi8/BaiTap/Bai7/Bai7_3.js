// Khai báo một mảng ký tự
let charArray = ['a', '2', '3', 'b', '4', 'c', '5','6'];
let arraySize = charArray.length;
let countDigits = 0;
for (let i = 0; i < arraySize; i++) {
  if (!isNaN(parseInt(charArray[i]))) {
    countDigits++;
  }
}
console.log(`Số ký tự số trong mảng là: ${countDigits}`);
