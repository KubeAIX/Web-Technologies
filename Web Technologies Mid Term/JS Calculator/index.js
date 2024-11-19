//Multiplication Function
function multiplyBy() {
   
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

  
    document.getElementById("result").innerHTML = num1 * num2;
}
//Division function
function divideBy() {
 
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;


    document.getElementById("result").innerHTML = num1 / num2;
} 
//Addition Function
function addBy() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);

    // Calculate the sum
    const sum = num1 + num2;

    // Display the result using innerHTML
    document.getElementById('result').innerHTML = isNaN(sum) ? 'Please enter valid numbers' : sum;
}
//Minus Function
function minusBy() {
   
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    
    document.getElementById("result").innerHTML = num1-num2;
} 