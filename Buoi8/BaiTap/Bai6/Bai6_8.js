const arrayS = [98,32,41,-3,-5,-4,0,1,3,2,-89,32,-88];
let sortedArray = arrayS.sort(function(a, b) {
    return b - a;
});

console.log(sortedArray.toString());