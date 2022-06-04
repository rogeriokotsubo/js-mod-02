document.getElementById('btn-check').addEventListener('click', fncCheck);

function fncCheck() {
  const resultFinal= document.querySelector("#p-result");
  const num1 = document.querySelector("#number1").value;
  const num2 = document.querySelector("#number2").value;

  if (parseFloat(num1) > parseFloat(num2)) {
    resultFinal.textContent='O primeiro número (' + num1 + ') é maior que o segundo (' + num2 + ').';
  } else if (parseFloat(num1) < parseFloat(num2)) {
    resultFinal.textContent='O segundo número (' + num2 + ') é maior que o primeiro (' + num1 + ').';
  } else {
    resultFinal.textContent='Os dois números são iguais (' + num1 + ').';
  }
}