let arrayS = [-3,5,1,3,2,10];

    // Cách 1
// arrayS.sort(function(a,b){
//     return b-a;
// })
// console.log("@@@ArrayS", arrayS);

    // Cách 2
let first = 0;
let last = arrayS.length -1;
while(first<last){
    let temp = arrayS[first];
    arrayS[first] = arrayS[last];
    arrayS[last] = temp;
    first ++;
    last --;
}
console.log("Mang dao chieu: ", arrayS);