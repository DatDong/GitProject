let sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
let i = 1;
let j;

while (i <= 10) {
    sout += "<tr>";
    j = 1;

    while (j <= 10) {
        sout += "<td>" + i * j + "</td>";
        j++;
    }

    sout += "</tr>";
    i++;
}

sout += "</table>";
document.write(sout);