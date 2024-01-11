function calculateFactorial(number) {
    if(number == 0 || number ==1){
        return 1;
    }else {
        return number * calculateFactorial(number-1);
    }
}
const inputNumber = 4;
const factorialResult =  calculateFactorial(inputNumber);
console.log("@@@factorialResult",factorialResult);   