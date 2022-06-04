document.getElementById('btn-check').addEventListener('click', fncCheck);

function fncCheck() {
  let expectativa = 80.1 * 365.25;
  let strGenero='feminino';  // convertendo para dias
  const now = new Date;
  const resultFinal= document.querySelector("#p-result");

  const dia = document.querySelector("#dia").value
  if (dia==""){
    alert('Por favor, informe o dia do seu nascimento.');  
    return false;
  }

  const mes = document.querySelector("#mes").value
  if (mes==""){
    alert('Por favor, informe o mês do seu nascimento.');  
    return false;
  }

  const ano = document.querySelector("#ano").value
  if (ano==""){
    alert('Por favor, informe o ano do seu nascimento.');  
    return false;
  }

  const genChecked = document.querySelector('input[name="genero"]:checked');
  if (genChecked==null){
    alert('Por favor, informe o seu gênero.');  
    return false;
  }
  const genero=genChecked.value;
  if (genero=="2"){
    expectativa = 73.1 * 365.25; // convertendo para dias
    strGenero='masculino';  
  } 
  expectativa=expectativa.toFixed(0); //arredondando para inteiro

  const dtHoje = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dtNasc = new Date(ano, mes-1, dia);

  if (dtHoje.getTime()<dtNasc.getTime()){
    alert('Data de Nascimento maior que a data de Hoje.');  
    return false;
  }
  const diff = Math.abs(dtHoje.getTime() - dtNasc.getTime()); //diff em milisegundos
  const diasVida = Math.ceil(diff / (1000 * 60 * 60 * 24)); //convertendo milisegundos em dias
  const diasRestantes = expectativa - diasVida; // dias de vida restantes
  if (diasRestantes < 0){
    resultFinal.textContent='Considerando a expectativa vida média da população brasileira para o gênero ' + strGenero + ', você ultrapassou sua expectativa de vida em ' + Math.abs(diasRestantes) + ' dias.';
  } else{    
  resultFinal.textContent='Considerando a expectativa vida média da população brasileira para o gênero ' + strGenero + ', você tem mais ' + diasRestantes + ' dias de vida.';
  }
 }
