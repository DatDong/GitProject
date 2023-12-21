// Ứng dụng chuyển đổi tiền tệ cho phép tính giá trị tiền tệ giữa các đồng tiền khác nhau dựa vào một tỉ giá cho trước.

function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    console.log("@@@amount", amount);
    
    var fromCurrencySelect = document.getElementById("from-currency");
    var selectedFromCurrencyOption = fromCurrencySelect.options[fromCurrencySelect.selectedIndex];
    var selectedFromCurrencyValue = selectedFromCurrencyOption.value;
    console.log("Selected From Currency Value: " + selectedFromCurrencyValue);

    var toCurrencySelect = document.getElementById("to-currency");
    var selectedToCurrencyOption = toCurrencySelect.options[toCurrencySelect.selectedIndex];
    var selectedToCurrencyValue = selectedToCurrencyOption.value;
    console.log("Selected To Currency Value: " + selectedToCurrencyValue);
;
    var exchangeRate = 1/24700;
    var convertAmount;
    if(selectedFromCurrencyValue == "VND" && selectedToCurrencyValue == "USD"){
        convertAmount = amount * exchangeRate;
    }
    else if(selectedFromCurrencyValue == "USD" && selectedToCurrencyValue == "VND"){
        convertAmount = amount / exchangeRate;
    }
    else if(selectedFromCurrencyValue == "USD" && selectedToCurrencyValue == "USD"){
        console.log("@@@amount", amount);
    }
    else if(selectedFromCurrencyValue == "VND" && selectedToCurrencyValue == "VND"){
        console.log("@@@amount", amount);
    }
    else {
        console.log("Loi r nha, fix di!");
        return;
    }
    console.log("Convert Currency" , convertAmount);
}