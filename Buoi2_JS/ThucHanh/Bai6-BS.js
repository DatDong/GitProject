function calculate(operation) {
    var inputNumberA = parseFloat(document.getElementById("inputNumberA").value);
    var inputNumberB = parseFloat(document.getElementById("inputNumberB").value);
    var resultCalculate = document.getElementById("result-calculate");

    if(!isNaN(inputNumberA) && !isNaN(inputNumberB)){
        var result;
        switch(operation){
            case 'addition':
                result = inputNumberA + inputNumberB;
                break;
            case 'subtraction':
                result = inputNumberA - inputNumberB;
                break;
            case 'multiplication':
                result = inputNumberA * inputNumberB;
                break;
            case 'division':
                if(inputNumberB !== 0) {
                    result = inputNumberA / inputNumberB;
                } else {
                    console.log("Không chia cho 0");
                    return;
                }
                break;
            default:
                console.log("Phép toán không hợp lệ");
                return;
        }
        resultCalculate.innerHTML = result;
        console.log("@@@result : " + result);
    }
    else {
        console.log("Vui lòng nhập lại số đúng định dạng number");
    }
}
