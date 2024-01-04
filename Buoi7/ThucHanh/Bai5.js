let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let indexNumber = 0;
for (let index = 0; index < numbers.length; index++) {
    if(max<numbers[index]){
        max=numbers[index];
        indexNumber = index;
    }
}

console.log(`Phan tu co gia tri lon nhat trong mang la ${max} o vi tri thu ${indexNumber+1}`);