function add() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var result = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = result;
}


function subtract() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var result = firstNumber - secondNumber;
    document.getElementById("result").innerHTML = result;
}

function multiply() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(doccument.getElementById("secondNumber").value);
    var result = firstNumber * secondNumber;
    document.getElementById("result").innerHTML = result;
}

function divide() {
    var firstNumber = parseFloat(document.getElementById("firstnumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var result = firstNumber / secondNumber;
    document.getElementById("result").innerHTML = result;
}