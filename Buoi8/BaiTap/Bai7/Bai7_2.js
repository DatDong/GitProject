const arrayS =  [ 'c', 's', 'c', '2', '6', '1' ];
const reverseArray = arrayS.reverse();
console.log(reverseArray);
let sumStr = "";
for(let i=0;i<reverseArray.length;i++){
    sumStr += reverseArray[i];
}
console.log(sumStr);