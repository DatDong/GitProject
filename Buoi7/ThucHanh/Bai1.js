let arr = ["Toyota", "Subaru", "BMW"];
console.log("@@@arr", arr);

let countArr = arr.length;
console.log("@@@countArr", countArr);

arr.push("Honda");
console.log("@@@arr", arr);

arr.unshift("Ferari");
console.log("@@@arr", arr);

arr.pop();
console.log("@@@arr", arr);

arr.shift();
console.log("@@@arr", arr);

arr.sort();
console.log("@@@arr", arr);

arr.reverse();
console.log("@@@arr", arr);

let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){
    return a-b;
})
console.log("@@@Points", points);

let points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a,b){
    return b-a;
})
console.log("@@@Points", points1);