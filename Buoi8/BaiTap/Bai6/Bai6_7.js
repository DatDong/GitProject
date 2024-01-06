const arrayS = [-3,-5,-4,0,1,3,2,-89,32,-88];
const inputNumber = 1;
for (let index = 0; index < arrayS.length; index++) {
    const element = arrayS[index];
    if(element == inputNumber){
        console.log("Phan tu duoc xoa :", element);
        arrayS.slice(element,1);
    }
}
console.log(arrayS.toString());