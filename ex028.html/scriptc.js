var telefonou = document.getElementById("telefonou").value.toUpperCase()
var local = document.getElementById("local").value.toUpperCase()
var moraPerto = document.getElementById("moraPerto").value.toUpperCase()
var devia = document.getElementById("devia").value.toUpperCase()
var trabalhou = document.getElementById("trabalhou").value.toUpperCase()

switch (telefonou){
case "S": var telefonou = 1;
break
}

switch (local){
case "S": var local = 1;
break
}

switch (moraPerto){
case "S": var moraPerto = 1;
break
}

switch (devia){
case "S": var devia = 1;
break
}

switch (trabalhou){
case "S": var trabalhou = 1;
break
}

var resultadoCrime = telefonou + local + moraPerto + devia + trabalhou

if (resultadoCrime == 2){
alert("Suspeita")
}else if (resultadoCrime == 3 || resultadoCrime == 4){
alert("Cúmplice")
}else if(resultadoCrime == 5){
alert("Assassino")
}else{
alert("Inocente")
}
