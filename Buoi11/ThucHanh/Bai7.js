// Xay dung lop mo ta dien thoai
let MyMobile = function(brand){
    this.brand = brand;
    this.battery = 100;
    this.draftMessage = "";
    this.inbox = [];
    this.sentMessages = [];
    this.powerOn =false;
}
// Chuc nang mo dien thoai
MyMobile.prototype.turnOn = function(){
    this.powerOn = true;
    console.log(`${this.brand} da duoc mo`);
}

// Chuc nang tat dien thoai
MyMobile.prototype.turnOff = function(){
    this.powerOn = false;
    console.log(`${this.brand} da duoc tat`);
}

// Chuc nang sac pin dien thoai
MyMobile.prototype.chargeBattery = function(){
    if(this.turnOn){
        this.battery = Math.min(100, this.battery + 10);
        console.log(`${this.brand} dang duoc sac`);
    }
    else{
        console.log(`${this.brand} chua duoc sac`);
    }
}
// Chuc nang soan tin nhan
MyMobile.prototype.composeMessage = function(message){
    if(this.turnOn){
        this.draftMessage = message;
        console.log(`${this.brand} dang soan tin nhan ${this.draftMessage}`);
    }
    else {
        console.log("Chua soan tin nhan");
    }
}
// Chuc nang nhan tin nhan tu dien thoai khac
MyMobile.prototype.recevieMessage = function(message,sender){
    if(this.turnOn){
        this.inbox.push({message,sender})
        console.log(`${this.brand} da nhan tin nhan tu ${sender}: ${message}`);
        this.battery -= 1;
    }
    else {
        console.log("Khong the gui duoc tin nhan!");
    }
}
// Chuc nang gui tin nhan den dien thoai khac
MyMobile.prototype.sendMessage = function(message,recipient){
    if(this.turnOn){
        recipient.recevieMessage(message,this.brand);
        this.sentMessages.push({message,recipient : recipient.brand});
        console.log(`${this.brand} gui tin nhan den ${recipient.brand} : ${message}`);
        this.battery -=1;
    }
    else {
        console.log("Khong the gui tin nhan");
    }
}
// Xem thu trong hop thu den
MyMobile.prototype.viewInbox = function(){
    if(this.turnOn){
        console.log(`${this.brand} dang xem hop thu den`);
        this.inbox.forEach((message) => { 
            console.log(`- Từ ${message.sender}: ${message.message}`);
        })
    }
    else {
        console.log("Khong the xem tin nhan den");
    }
}

// Xem tin da gui
MyMobile.prototype.viewSentMessage = function(){
    if(this.turnOn){
        console.log(`${this.brand} dang xem tin da gui`);
        this.sentMessages.forEach((message) => {
            console.log(`- Đến ${message.recipient}: ${message.message}`);
        })
    }
    else{
        console.log("Khong the xem tin nhan da gui");
    }
}
// Xem pin
MyMobile.prototype.checkBattery = function(){
    console.log(`${this.brand} luong pin con ${this.battery}`);
}
let nokia = new MyMobile("nokia");
let iphone = new MyMobile("iphone");
nokia.turnOn();
iphone.turnOn();
nokia.composeMessage("Hi Iphone~~");
nokia.sendMessage(nokia.draftMessage,iphone);
iphone.viewInbox();
nokia.viewSentMessage();
nokia.checkBattery();