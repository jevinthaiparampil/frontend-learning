let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
var count = 0;
const buttons = document.querySelectorAll('button');
window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});
display();
clickButton();

function display() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function clickButton() {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      if(buttons[i].classList.contains('operand')) {
        inputOperand(buttons[i].value);
        display();
      } else if(buttons[i].classList.contains('operator')) {
          inputOperator(buttons[i].value);
          display();
      } else if(buttons[i].classList.contains('equals')) {
          inputEquals();
          display();
      } else if(buttons[i].classList.contains('decimal')) {
          inputDecimal(buttons[i].value);
          display();
      } else if(buttons[i].classList.contains('clear')){
          clearDisplay();
          display();
      } else if(buttons[i].classList.contains('back')){
          backSpace();
          display();
      }
    })
  }
}

function inputOperand(operand) {
  if(firstOperator == null) {
    if(displayValue == '0') {
      displayValue = operand;
    } else if(displayValue == firstOperand) {
        displayValue = operand;
    } else {
        displayValue += operand;
      }
  } else {
      if(displayValue == firstOperand) {
        displayValue = operand;
      } else {
          displayValue += operand;
      }
  }
}

function inputOperator(operator) {
  if(firstOperator != null && secondOperator == null) {
    secondOperator = operator;
    secondOperand = displayValue;
    result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
    displayValue = roundAccurately(result, 15).toString();
    firstOperand = displayValue;
    result = null;
  } else if(firstOperator != null && secondOperator != null) {
      secondOperand = displayValue;
      result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
      secondOperator = operator;
      displayValue = roundAccurately(result, 15).toString();
      firstOperand = displayValue;
      result = null;
  } else { 
      firstOperator = operator;
      firstOperand = displayValue;
    }
}

function operate(operand1,operand2,operator) {
  if(operator == '+')
    return(operand1+operand2);
  else if(operator == '-')
    return(operand1-operand2);
  else if(operator == '*')
    return(operand1*operand2);
  else if(operator == '/'){
    if(operand2 == 0)
      return ('Schooling failed')
    else
      return(operand1/operand2);
  }
}

function inputEquals() {
  count++;
  if(firstOperator == null) {
    displayValue = displayValue;
  } else if(secondOperator != null) {
      secondOperand = displayValue;
      result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
      if(result == 'Schooling failed') {
        displayValue = 'Schooling failed';
      } else {
          displayValue = roundAccurately(result, 15).toString();
          firstOperand = displayValue;
          secondOperand = null;
          firstOperator = null;
          secondOperator = null;
          result = null;
        }
  } else {
      secondOperand = displayValue;
      result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
      if(result == 'Schooling failed') {
        displayValue = 'Schooling failed';
      } else {
          displayValue = roundAccurately(result, 15).toString();
          firstOperand = displayValue;
          secondOperand = null;
          firstOperator = null;
          secondOperator = null;
          result = null;
        }
    }
}

function inputDecimal(dot) {
  if(displayValue == firstOperand || displayValue == secondOperand) {
    displayValue = '0';
    displayValue += dot;
  } else if(!displayValue.includes(dot)) {
      displayValue += dot;
    } 
}

function clearDisplay() {
  displayValue = '0';
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
  count = 0;
}

function backSpace() {
  if (secondOperand == null && firstOperator == null && result == null && secondOperator == null && count > 0){}
  else if(displayValue == 'Schooling failed'){}
  else if (displayValue != '0'){
    displayValue= displayValue.substring(0, displayValue.length - 1);
    if(displayValue == ''){
      displayValue = 0;
    }
  }
}

function roundAccurately(num, places) {
  return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}