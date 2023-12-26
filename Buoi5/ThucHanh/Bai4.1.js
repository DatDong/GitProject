let num = parseFloat(prompt("Nhập một số: "));
let total = 0;
while (parseFloat(num) !== -1) {
    // alert("Số vừa nhập: " + num);
    total += parseFloat(num);
    num = prompt("Nhập một số: ");
}
document.getElementById("demo").innerHTML=total;
