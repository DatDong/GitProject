const arrayS = ["anh-yeu-em"];

for (let index = 0; index < arrayS.length; index++) {
    let arraysSplit = arrayS[index].split("");
    
    for (let i = 0; i < arraysSplit.length; i++) {
        if (arraysSplit[i] === "-") {
            arraysSplit[i] = "__";
        }
    }

    console.log(arraysSplit.join(''));
}
