document.getElementById('btn-check').addEventListener('click', fncCheck);

function fncCheck() {
  let resultFinal= document.querySelector("#p-result");
  let str1 = document.querySelector("#string1").value.trim();
  let str2 = document.querySelector("#string2").value.trim();

  if (str1.length > str2.length) {
    resultFinal.textContent='A primeira string '+str1+' (' + str1.length + ' caracteres) é maior que a segunda string '+ str2 + ' (' + str2.length + ' caracteres).';
  } else if (str1.length < str2.length) {
    resultFinal.textContent='A segunda string '+str2+' (' + str2.length + ' caracteres) é maior que a primeira string '+ str1 + ' (' + str1.length + ' caracteres).';
  } else {
    resultFinal.textContent='As duas strings tem o mesmo tamanho (' + str1.length + ' caracteres).';
  }
} 