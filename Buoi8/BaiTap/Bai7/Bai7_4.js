const str = "anh em yeu nhau di";
let count = 0;
for(let i=0;i<str.length;i++){
    if(str[i] !== " "){
        console.log(str[i]);
        count ++;
    }
}
console.log("So luong ky tu = ", count);