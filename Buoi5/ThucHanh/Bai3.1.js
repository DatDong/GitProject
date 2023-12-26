//Luyện tập sử dụng vòng lặp for.

// for(let i=0; i<5;i++){
//     console.log("The number is " + i);
// }

let text = "";
let i;
for(i=0;i<5;i++){
text+="The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML= text;