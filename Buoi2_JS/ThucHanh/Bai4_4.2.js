//Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit). 
//[Hướng dẫn: C/5 = (F-32)/9]

let celsius = prompt("Nhap do C : ");
celsius = parseFloat(celsius);
if(!isNaN(celsius)) {
    let fahrenheit = (celsius * 9/5) + 32;
    document.write("Gia tri do F : " + fahrenheit);
}else {
    document.write("Vui long nhap 1 gia tri hop le do C");
}