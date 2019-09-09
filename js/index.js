const inputCalc = document.querySelector('.account');
      resultCalc = document.querySelector('.resault');

const display = document.querySelector('.calcutor .header .account')
const resault = document.querySelector('.calcutor .header .resault')
function output(i) {
    inputCalc.value = inputCalc.value + i
}


function result() {
    if( eval(inputCalc.value) == undefined) {
        resultCalc.value = '0.00';
        inputCalc.value = '0.00';
    }
    if( eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0.00';
        inputCalc.value = '0.00';
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}

function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.lenght-1)
}

function reset(){
    resultCalc.value = ''
    inputCalc.value = '0,00'
}
