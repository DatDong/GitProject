// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. 
//Sau đó hiển thị điểm trung bình và tổng của những điểm này.


let vatlyScores = parseFloat(prompt("Nhập điểm môn Vật lý:"));

while (isNaN(vatlyScores) || vatlyScores < 0 || vatlyScores > 10) {
    vatlyScores = parseFloat(prompt("Nhập lại điểm môn Vật lý từ 0 đến 10"));
}

document.write("Điểm môn Vật lý: " + vatlyScores);
document.write("<br>");

let hoahocScores = parseFloat(prompt("Nhập điểm môn Hóa học:"));

while (isNaN(hoahocScores) || hoahocScores < 0 || hoahocScores > 10) {
    hoahocScores = parseFloat(prompt("Nhập lại điểm môn Hóa học từ 0 đến 10"));
}

document.write("Điểm môn Hóa học: " + hoahocScores);
document.write("<br>");

let sinhhocScores = parseFloat(prompt("Nhập điểm môn Sinh học:"));

while (isNaN(sinhhocScores) || sinhhocScores < 0 || sinhhocScores > 10) {
    sinhhocScores = parseFloat(prompt("Nhập lại điểm môn Sinh học từ 0 đến 10"));
}

document.write("Điểm môn Sinh học: " + sinhhocScores);
document.write("<br>");

let avg = (vatlyScores + hoahocScores + sinhhocScores) / 3;
document.write("Điểm trung bình 3 môn: " + avg);
