let MyCircle =  function(radius){
    this.radius = radius;
}
MyCircle.prototype.getRadius = function(){
    return this.radius;
}
MyCircle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius
}

let cicrle = new MyCircle(2);
let radius = cicrle.getRadius();
let area = cicrle.getArea();
console.log(radius + " - " + area  );

let anotherCircle = new MyCircle(3);
let anotherCircleradius = anotherCircle.getRadius();
let anotherCirclearea = anotherCircle.getArea();
console.log(anotherCircleradius + " - " + anotherCirclearea  );