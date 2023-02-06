const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
let result = document.getElementById("result");
let opActual = '';
let opBefore= '';
let operation = null;

// Escucha al boton num
numbers.forEach((number) => {
  number.addEventListener('click', function(event){
    addNum(event.target.value);
  });
});

// Escucha al botón op
operators.forEach((operator) => {
  operator.addEventListener("click", function(event) {
    selectOp(event.target.value);
  });
});

// Escucha al boton equal
function total() {
  calculate();
  displayUpdate();
  }

//Borra lo escrito en el input
function clearInput() {
  let getValue = document.getElementById("result");
  if (getValue.value != "") {
      getValue.value = "";
  }
  clear();
}

//Seleccionar operacion
function selectOp(op){
  if(opActual === '') return;
  if(opBefore !== ''){
    calculate();
  }
  operation = op.toString();
  opBefore = opActual;
  opActual = '';
}

//operaciones
function calculate(){
  var res;
  const before = parseFloat(opBefore);
  const actual = parseFloat(opActual);
  if(isNaN(before) || isNaN(actual)) return;
  switch(operation){
    case '+':
      res = before + actual;
      break;
    case '-':
      res = before - actual;
      break;
    case '*':
      res = before * actual;
      break;
    case '/':
      res =  before / actual;
      break;
    case 'exp':
     res = Math.pow(before, actual);
     break;
    case 'root':
     res = Math.sqrt(before); 
    break;
    default:
        return;
  }

  clear();
  opActual = res;
  operation = null;
  opBefore = '';
}

function addNum(num){
  opActual = opActual.toString() + num.toString();
  displayUpdate();
}

function clear(){
  opActual = '';
  opBefore = '';
  operation = undefined;
}

function displayUpdate() {
  result.value = opActual;
}



//numbers.forEach((numbers) => {
  //numbers.addEventListener("click", function (event) {
    //result.value += event.target.value;
  //});
//});




// 1. Escuchar click del boton numerico OK
// 2. Guardar los datos num del boton OK
// 3. Visualizar en el input OK
// 3.1 Concatenar OK
// 4. operadores
// 5. Resultado
// 6. borrar
