//Bài 4: Viết chương trình chu vi hình tròn

let r = parseFloat(prompt("Nhập bán kính hình tròn: "));

while (isNaN(r) || r <= 0) {
    r = parseFloat(prompt("Nhập lại bán kính hình tròn (phải là số dương): "));
} 

let s = Math.PI * Math.pow(r, 2);
let c = 2 * Math.PI * r;

document.write("Diện tích hình tròn là: " + s.toFixed(2) + "<br>");
document.write("Chu vi hình tròn là: " + c.toFixed(2));
