let firstValue = prompt('Enter first value: ');
let secondValue = prompt('Enter second value: ');
let operator = prompt('Enter operator: ');
let result = 0;

if (operator === '+') {
    let intValue1 = parseInt(firstValue);
    let intValue2 = parseInt(secondValue);
   //firstValue + secondValue 
    alert(intValue1 + intValue2)
} else if (operator === '-') {
    let result = console.log(firstValue - secondValue);
    alert(result)
} else if (operator === '*') {
    result = console.log(firstValue * secondValue);
    alert(result)
} else if (operator === '/') {   
    alert(firstValue / secondValue);
}

 
// This is a comment
