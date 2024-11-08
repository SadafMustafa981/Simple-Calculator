function calculate() {
    const firstNumber = parseFloat(document.getElementryById("firstNumber").value)
    const secondNumber = parseFloat(document.getElementryById("secondNumber").value)
    const operator = document.getElementryById("operator").value

    let result;
    if(operator === "Addition"){
        result = firstNumber + secondNumber
    }  else if (operator === "Subtraction"){
        result = firstNumber - secondNumber
    }  else if (operator === "Multiplication"){
        result = firstNumber * secondNumber
    }  else if (operator === "Division"){
        result = firstNumber / secondNumber
    } else {
        result = "Please select a valid operator"
    }

    document.getElementById("result").innerText = "Result: " + result;
}