const arrayS = [-3,-5,-4,0,1,3,2,-89,32,-88];
let count = 0;
for(let i=0;i<arrayS.length;i++){
    if(arrayS[i]< 0){
        count ++;
    }
}
console.log("Dem cac so nguyen am: ", count);