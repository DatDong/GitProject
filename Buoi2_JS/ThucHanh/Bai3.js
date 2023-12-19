let a = prompt("Nhap so a: ");
a = parseFloat(a);
document.write("<br/>");
document.write("a = " + a);
document.write("<br/>");

let b = prompt("Nhap so b: ");
b = parseFloat(b);
document.write("<br/>");
document.write("b = " + b);

if (!isNaN(a) && !isNaN(b)) {
  if (a % b === 0) {
    document.write("<br/>");
    document.write(a + " chia het cho " + b);
  } else {
    document.write("<br/>");
    document.write(a + " khong chia het cho " + b);
  }
} else {
  document.write("Vui long nhap so hop le cho a va b");
}
