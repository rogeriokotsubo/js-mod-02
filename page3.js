document.getElementById('btn-check').addEventListener('click', fncCheck);

function fncCheck() {

  let dia = document.querySelector("#dia").value
  if (dia.float=0){
    alert('Por favor, informe o dia do seu nascimento.');  
  }
  let mes = document.querySelector("#mes").value
  if (mes.float=0){
    alert('Por favor, informe o mês do seu nascimento.');  
  }
  let ano = document.querySelector("#ano").value
  if (ano.float=0){
    alert('Por favor, informe o ano do seu nascimento.');  
  }
  let genero = document.querySelector(".ipt-gender").value;
  
  if (genero==null){
    alert('Por favor, informe o seu gênero.');  
  }
  console.log(dia);
  if (genero==="1"){
    let expectativa = 80.1;
  } else {
    let expectativa = 73.1;
  }  
  

} 