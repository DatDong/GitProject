//Luyện tập làm việc với các khái niệm cơ bản của Javascript: biến, toán tử, biểu thức, hàm và làm việc với form
//Tạo một ứng dụng máy tính đơn giản để thực hiện các phép tính đơn giản
    
function addition() {
    var inputNumberA =parseFloat(document.getElementById("inputNumberA").value);
    console.log("@@@inputNumberA " + inputNumberA);
    var inputNumberB =parseFloat(document.getElementById("inputNumberB").value);
    console.log("@@@inputNumberB " + inputNumberB);
    var resultCalculate = document.getElementById("result-calculate");
    if(!isNaN(inputNumberA) && !isNaN(inputNumberB)) {
        var result = inputNumberA + inputNumberB;
        resultCalculate.innerHTML = result;
        console.log("@@@result : " + result);
    }
    else {
        console.log("Loi r, fix toi");
    }
}

function subtraction() {
    var inputNumberA = parseFloat(document.getElementById("inputNumberA").value);
    var inputNumberB = parseFloat(document.getElementById("inputNumberB").value);
    var resultCalculate = document.getElementById("result-calculate");

    if (!isNaN(inputNumberA) && !isNaN(inputNumberB)) {
        var result = inputNumberA - inputNumberB;
        resultCalculate.innerHTML = result;
        console.log("@@@result : " + result);
    } else {
        console.log("Loi r, fix toi");
    }
}

function multiplication() {
    var inputNumberA = parseFloat(document.getElementById("inputNumberA").value);
    var inputNumberB = parseFloat(document.getElementById("inputNumberB").value);
    var resultCalculate = document.getElementById("result-calculate");

    if (!isNaN(inputNumberA) && !isNaN(inputNumberB)) {
        var result = inputNumberA * inputNumberB;
        resultCalculate.innerHTML = result;
        console.log("@@@result : " + result);
    } else {
        console.log("Loi r, fix toi");
    }
}

function division() {
    var inputNumberA = parseFloat(document.getElementById("inputNumberA").value);
    var inputNumberB = parseFloat(document.getElementById("inputNumberB").value);
    var resultCalculate = document.getElementById("result-calculate");

    if (!isNaN(inputNumberA) && !isNaN(inputNumberB)) {
        if (inputNumberB !== 0) {
            var result = inputNumberA / inputNumberB;
            resultCalculate.innerHTML = result;
            console.log("@@@result : " + result);
        } else {
            console.log("không thể chia cho 0");
        }
    } else {
        console.log("Loi r, fix toi");
    }
}