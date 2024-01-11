
function calculateArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}
function calculatePerimeter(radius) {
    const perimeter = 2 * Math.PI * radius;
    return perimeter;
}

const radius = 5;
const area = calculateArea(radius);
const perimeter = calculatePerimeter(radius);

console.log("Diện tích hình tròn: " + area.toFixed(2));
console.log("Chu vi hình tròn: " + perimeter.toFixed(2));