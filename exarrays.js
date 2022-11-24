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




//Calcular a média de todos os números de um array
function mediaArray(ar) {
 var n = ar.length;
 var soma = 0;
 for (var i = 0; i < n; i++) {
 soma += ar[i];
 }
 return soma / n;
}
var ar = [1, 3, 9, 15, 90];
var media = mediaArray(ar);
console.log("mediaArray: ", media);




//Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.
function retornarPositivos(ar){
 var ar2 = [];
 for (var i = 0; i < ar.length; i++) {
 var el = ar[i];
 if (el >= 0) {
 ar2.push(el);
 }
 }
 return ar2;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = retornarPositivos(ar);





//Localizar o maior valor dentro de um array de números
function LocalizarMaior(ar) {
 var max = ar[0];
 for (var i = 0; i < ar.length; i++) {
 if (ar[i] > max) {
 max = ar[i];
 }
 }
 return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = LocalizarMaior(ar);
console.log("Maior número: ", max);






//Calcular a soma de todos os dígitos de um número inteiro positivo
function somarDigitos(n) {
 var s = n.toString();
 var soma = 0;
 for (var char of s) {
 var digito = parseInt(char);
 soma += digito;
 }
 return soma;
}
var resultado = somarDigitos(1235231);
console.log("Soma de todos os dígitos: ", resultado); 



//Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade
//A sequência de Fibonacci é composta por uma sucessão de números descrita pelo famoso
//matemático italiano Leonardo de Pisa (1170-1250), mais conhecido como Fibonacci, no final do
//século 12. O matemático percebeu uma regularidade matemática a partir de um problema
//criado por ele mesmo. Além disso, quando esses números são transformados em quadrados e
//dispostos de maneira geométrica, é possível traçar uma espiral, que curiosamente também
//pode ser vista em muitos fenômenos naturais.
//A fórmula usada para calcular a sequência de Fibonacci é a seguinte:
Fn = Fn - 1 + Fn - 2
//(Fn = Fator numeral)


//Neste caso, repetimos o número 1 e somamos os dois, ou seja, 1 + 1 = 2. Em seguida, somamos
//o resultado com o número antecessor, ou seja, 2 + 1 = 3, e assim continuamente, em uma sequência infinita
var f0 = 0;
console.log(f0);
var f1 = 1;
console.log(f1);
for (var i = 2; i < 10; i++) {
 var fi = f1 + f0;
 console.log(fi);
 f0 = f1;
 f1 = fi;
}



//Criar uma função para imprimir os 10 primeiros números da sequência de Fibonacci usando recursividade
function localizarFibonacci(n) {
 if (n == 0)
 return 0;
 if (n == 1)
 return 1;
 return localizarFibonacci(n - 1) + localizarFibonacci(n - 2);
}
var n = localizarFibonacci(10);
console.log(n); 