//Imprimir números de 1 a 10

for (var i = 1; i <= 10; i++) {
 console.log(i);
}


//Imprimir os números impares menores que 100
for (var i = 1; i <= 100; i += 2) {
 console.log(i);
}


//Imprimir a tabuada do número 8
for (var i = 1; i <= 10; i++) {
 var row = "8 * " + i + " = " + 8 * i;
 console.log(row);
}



//Imprimir todas as tabuadas do número 1 ao 10
function ImprimirTabuada(n) {
 for (var i = 1; i <= 10; i++) {
 var linha = n + " * " + i + " = " + n * i;
 console.log(linha);
 }
}
for (var i = 1; i <= 10; i++) {
 ImprimirTabuada(i);
 console.log("");
}





//Soma dos números de 1 a 10
var soma = 0;
for(var i = 1; i <= 10; i++){
 soma += i;
}
console.log(soma);




//Calculado o fatorial de 10
var numero = 1;
for(var i = 1; i <= 10; i++){
 numero *= i;
}
console.log(numero);





//Criar uma função para calcular a porcentagem de um número
function porcentagem(num, per) {
 return (num/100)*per;
}
console.log(porcentagem(1000, 57.18));





//Calcular a soma dos números impares maiores que 10 e menores que 30
var soma = 0;
for(var i = 11; i <= 30; i += 2) {
 soma += i;
}
console.log(soma); 