//Trong phần này, chúng ta sẽ phát triển một ứng dụng nhằm kiểm tra xem một năm có phải là năm nhuận hay không
let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;
if(year %4 == 0) {
    if(year % 100 == 0){
        if(year %400 == 0){
            isLeapYear ==true
        }
    }
    else {
        isLeapYear = true;
    }
}
if(isLeapYear) {
    alert(year + "is a leap year");
}
else {
    alert(year + "is not a leap year");
}