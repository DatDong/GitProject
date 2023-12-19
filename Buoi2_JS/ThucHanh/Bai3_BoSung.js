function checkMultiples() {
    let a = parseFloat(document.getElementById("inputNumberA").value);
    let b = parseFloat(document.getElementById("inputNumberB").value);
    let inner = document.getElementById("innerHTML");
    // console.log("inner", inner);
    inner.innerHTML  = "So a : " + a + "| So b : " + b;
    // console.log("a", a);
    // console.log("b", b);
    if( !isNaN(a) && !isNaN(b)){
        if( a % b === 0) {
            inner.innerHTML = a + " chia het cho " + b;
        }
        else {
            inner.innerHTML = a + " khong chia het cho " + b;
        }
    }else {
        inner.innerHTML  = "Vui long nhap so hop le cho a va b";
    }
}
