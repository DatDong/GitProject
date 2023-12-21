// let a = prompt("a: ");
// let b = prompt("b: ");
// let result = (parseInt(a) + parseInt(b) < 4) ? 'Below' : 'Over';
// alert(result);

let message;
let login = prompt("enter string");
message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
alert(message);
