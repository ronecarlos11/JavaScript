function validar(){
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var ano = parseInt(document.getElementById("ano").value);
    resposta = document.getElementById('resposta');

    switch(mes){
     case 1: case 3: case 5: case 7: 
     case 8: case 10: case 12:
      if(dia <= 31)
       resposta.innerHTML = "Data válida";
      else
       resposta.innerHTML = "Inválido (mes com mais de 31 dias)";
      break ;
     case 4: case 6:
     case 9: case 11:
      if(dia <= 30)
       resposta.innerHTML = "Data válida";
      else
       resposta.innerHTML = "Inválido (mes com mais de 30 dias)";
      break ;
     case 2:
      if( (ano%400 == 0) || (ano%4==0 && ano%100!=0) )
       if( dia <= 29)
        resposta.innerHTML = "Data válida";
       else
        resposta.innerHTML = "Inválido (mes com mais de 29 dias)";
      else
       if( dia <= 28)
        resposta.innerHTML = "Data válida";
       else
        resposta.innerHTML = "Inválido (mes com mais de 28 dias)";
    }
}