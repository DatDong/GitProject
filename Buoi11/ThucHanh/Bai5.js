let MyRectangle = function(length, width){
    this.length = length;
    this.width = width;
};
MyRectangle.prototype.getDienTich = function() {
    return this.length * this.width;
}
MyRectangle.prototype.getChuVi = function() {
    return (this.length + this.width) * 2;
}
MyRectangle.prototype.getToString = function(){
    return `Diện tích: ${this.getDienTich()} || Chu vi: ${this.getChuVi()}`;
}
MyRectangle.prototype.setLength = function(length) {
    this.length = length;
}
MyRectangle.prototype.setWidth = function(width){
    this.width = width;
}

let rectangle = new MyRectangle(5,5);
let dientich = rectangle.getDienTich();
let chuvi = rectangle.getChuVi();
let result = rectangle.getToString();
console.log("@@@",result);
