let inputNumber = 4
let numbers = [-3, 5, 1, 3, 2, 10];
let found = false;
// Update Code de toi uu
for(let i =0;i<numbers.length;i++){
    if(inputNumber == numbers[i]){
        console.log(`So nhap vao ${inputNumber} bang voi so trong mang ${numbers[i]}`);
        found == true;
        break;
    }
}
if(!found) {
    console.log("Khong co so giong trong mang");
}