//Bài 3: Viết chương trình tính diện tích hình tròn

let r = parseFloat(prompt("Nhập bán kính hình tròn: "));

while (isNaN(r) || r <= 0) {
    r = parseFloat(prompt("Nhập lại bán kính hình tròn (phải là số dương): "));
} 

let s = Math.PI * Math.pow(r, 2);
document.write("Diện tích hình tròn là: " + s.toFixed(2));
