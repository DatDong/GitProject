let MyTemperature = function(celsius){
    if(celsius < -273){
        console.log("Nhiet do khong hop le");
    }
    else{
        this.celsius = celsius;
    }
}
MyTemperature.prototype.getCConvertToF =function(){
    return (this.celsius * 9/5) +32;
}
MyTemperature.prototype.getCConvertTOKenvin = function() {
    return this.celsius + 273.15;
}

let temperature = new MyTemperature(25);
console.log("@@@",  temperature.getCConvertToF());
console.log("@@@",  temperature.getCConvertTOKenvin());
