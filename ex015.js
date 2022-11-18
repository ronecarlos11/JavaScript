const hoje = new Date()
hoje.getDate() // O dia do mês
hoje.getDay() // O valor inteiro do dia da semana
hoje.getFullYear() // O ano com quatro dígitos
hoje.getHours() // A hora do dia
hoje.getMilliseconds() // O número de milissegundos desde o ultimo segundo
hoje.getMinutes() // O número de minutos desde a última hora
hoje.getMonth() // o mês do ano
hoje.getTime() // O número de milissegundos desde a meia noite de 1° de janeiro de 1970
hoje.TolocaleString() // A data e hora local em formato de string


//Na variável dia utilizamos o getDate(), porém em casos onde o número do dia é menor que 10, podemos adicionamos um 0 a esquerda utilizando o método padStart() como demonstrado no exemplo abaixo.
//const hoje = new Date()
//const dia = hoje.getDate().toString().padStart(2,'0')
//const mes = String(hoje.getMonth() + 1).padStart(2,'0')
//const ano = hoje.getFullYear()
//const dataAtual = `${dia} / ${mes} / ${ano}`
//O resultado será: 17 / 02 / 2022. Dessa forma vamos fazer com que nossa data tenha no mínimo dois caracteres, adicionando um zero no início da String para ficar algo mais natural.





//o operador unário mais +,  tenta converter o argumento em um número, apenas como referencia
//const [ano, mes, dia, hora, minuto, segundo, milissegundo] = [2022,02,21,09,58,0,35]
//const data1 = new Date(ano,mes,dia,hora,minuto,segundo,milissegundo)
//const data2 = new Date(ano,mes,dia,hora,minuto,segundo,milissegundo)
//console.log(+data1)
//console.log(+data1 == +data2)
//O resultado será : 1647867480035 e true.