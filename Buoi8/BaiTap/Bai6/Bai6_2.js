const arrayS = [1,3,2,5,4,73,6,7,10,9,64,75];
let max = arrayS[0];
let vitri = 0;
for(let i=0;i<arrayS.length;i++){
    if(max < arrayS[i]) {
        max = arrayS[i];
        vitri = i+1;
    }
}
console.log(`So lon nhat la ${max} o vi tri ${vitri} `);
