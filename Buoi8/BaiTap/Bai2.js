    // Bai 2.1
// const myColorS = ["Red", "Green", "White", "Black"];
// console.log("@@@Color to string : ", myColorS.toString());
// console.log("@@@Color join : ", myColorS.join());
// console.log("@@@Color join : ", myColorS.join(" + "));

    // Bai 2.2
const inputNumber = 122522440025214;
const str = inputNumber.toString();
console.log(str);
const result = [str[0]];
console.log(result);
for(let i =1; i<str.length;i++){
    if((str[i-1]%2 == 0) && (str[i]%2 == 0)){
        result.push(" - ", str[i]);
    }
    else {
        result.push(str[i]);
    }
}
console.log(result.join(""));