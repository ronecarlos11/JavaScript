//A propriedade length de um Array retorna o comprimento de um Array (o número de elementos do Array).
var frutas = ["Banana", "Laranja", "Maça", "Manga"];
frutas.length;                       // o length de frutas é 4


//A melhor maneira de percorrer um Array é usando um loop "for":
var frutas, text, fLen, i;
frutas = ["Banana", "Laranja", "Maça", "Manga"];
fLen = frutas.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + frutas[i] + "</li>";
}



//A maneira mais fácil de adicionar um novo elemento a um Array é usar o método push:
var frutas = ["Banana", "Laranja", "Maça", "Manga"];
frutas.push("Limão");  // acrescenta o novo elemento (limão) às frutas


//Novos elementos também podem ser adicionado a um array usando a propriedade length:
var frutas = ["Banana", "Laranja", "Maça", "Manga"];
frutas[frutas.length] = "Limão";     // Adiciona o novo elemento (Limão) a frutas
//A adição de elementos com índices altos pode criar "buracos" indefinidos em um array:




//A Diferença entre Arrays e Objetos
//Em JavaScript, os arrays usam índices numerados.
//Em JavaScript, os objetos usam índices nomeados.



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







//Criar uma função que retorno um valor booleano informando se o número enviado como parâmetro é um número primo.
function numeroPrimo(n) {
 if (n < 2)
 return false;
 if (n == 2)
 return true;
 var maxDiv = Math.sqrt(n);
 for (var i = 2; i <= maxDiv; i++) {
 if (n % i == 0) {
 return false;
 }
 }
 return true;
}
console.log(2, " é um número primo? ", numeroPrimo(2));
console.log(3, " é um número primo? ", numeroPrimo(3));
console.log(4, " é um número primo? ", numeroPrimo(4));
console.log(5, " é um número primo? ", numeroPrimo(5));
console.log(9, " é um número primo? ", numeroPrimo(9));






//Crie uma função que calcule a raiz quadrada de um número e retorne um número inteiro como resultado
function raiz_quadrada_para_inteiro(num) {
 return parseInt(Math.sqrt(num)+"");
}
console.log(raiz_quadrada_para_inteiro(17)); 




                //Extremamente importante
//Retornar a maior string de um array
function maiorString(arr) {
 var maior = '';
 for (var i = 0; i < arr.length; i++) {
 if (arr[i].length > maior.length) {
 maior = arr[i];
 }
 }
 return maior;
}
console.log(maiorString(['Sao Paulo', 'Rio de Janeiro', 'Amazonas', 'Pernambuco', 'Santa Catarina', 'Rio Grande do Norte', 'Sergipe']));







//Criar uma função que junte dois arrays e retorno o resultado como um novo array
function juntarArrays(ar1, ar2) {
 var ar = [];
 for (let el of ar1) {
 ar.push(el);
 }
 for (let el of ar2) {
 ar.push(el);
 }
 return ar;
}
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = juntarArrays(ar1, ar2);
console.log(ar);





//Implemente o algoritmo "bubble sort" para um array de números
function bubbleSort(ar) {
    var shouldSort = true;
    var length = ar.length;
    while(shouldSort) {
    shouldSort = false;
    length--;
    for (var i = 0; i < length; i++) {
    var a = ar[i];
    if ( a > ar[i+1] ) {
    ar[i] = ar[i+1];
    ar[i+1] = a;
    shouldSort = true;
    }
    }
    }
   }
   var ar = [23, 1000, 1, -1, 8, 3];
   console.log(ar);
   bubbleSort(ar);
   console.log(ar); 

   





//Contar a quantidade de palavras em um texto
function contarPalavras(text) {
    var existe_separador = true;
    var palavras = 0;
    for (var c of text) {
    if (separador (c)) {
    existe_separador = true;
    continue;
    }
    if (existe_separador) {
    palavras ++;
    existe_separador = false;
    }
    }
    return palavras;
   }
   function separador(c) {
    var separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separadores.includes(c);
   }
   console.log(contarPalavras (""));
   console.log(contarPalavras (" "));
   console.log(contarPalavras ("SQL Server!! "));
   console.log(contarPalavras (" React Native PHP ASP"));
   console.log(contarPalavras (" O PHP existe a mais de 26 anos "));
   console.log(contarPalavras ("Vamos estudar bancos de dados relacionais"));








//Criar uma função para inverter um array
function inverterArray(ar){
    var ar2 = [];
    for(var i = ar.length - 1; i >= 0; i--) {
    ar2.push(ar[i]);
    }
    return ar2;
   }
   var ar = [1, 2, 3];
   var ar2 = inverterArray(ar);
   console.log(ar2); 



