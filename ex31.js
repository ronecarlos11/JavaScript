function perfeito()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 var soma=1;

 for(let count=2; count<num ; count++)
  if (num%count == 0)
   soma += count;

 if(soma==num)
  resp.innerHTML="Perfeito";
 else
  resp.innerHTML="Nao é perfeito";
}
