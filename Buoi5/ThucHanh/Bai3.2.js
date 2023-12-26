let num = parseFloat(prompt("Nhap so cua ban: "));
let total = 0;
for(let i=0;i<=num;i++){
    total+=i;
}
document.getElementById("demo").innerHTML = total;