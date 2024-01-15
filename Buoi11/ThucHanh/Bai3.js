// Xay dung lop va phuong thuc khoi tao
let MyDate = function(day,month,year){
    this.day = day;
    this.month = month;
    this.year = year;
}
// Xay dung phuong thuc tra ve
MyDate.prototype.getDay = function(){
    return this.day;
}
MyDate.prototype.getMonth = function() {
    return this.month;
}
MyDate.prototype.getYear = function(){
    return this.year;
}
MyDate.prototype.getToString = function() {
    return this.day + "/" + this.month + "/" + this.year;
}
// Xay dung phuong thuc thiet dat lai gia tri cac thuoc tinh
MyDate.prototype.setDay = function(day){
    this.day = day;
}
MyDate.prototype.setMonth = function(month){
    this.month = month;
}
MyDate.prototype.setYear = function(year){
    this.year = year;
}
MyDate.prototype.setDate = function(day,moth,year){
    this.day=day;
    this.month=month;
    this.year=year;
}

let date = new MyDate(2,2,2222);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();  
// console.log(day + "/" + month + "/" + year);
console.log(date.getToString()); 
date.setDate(1,1,1111);
console.log(date.getToString());