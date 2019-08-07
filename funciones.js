function calcularCF(){
 var temp = (document.getElementById('temp').value)*1;
 var total = (temp * 1.8) + 32;
 total = total.toFixed(2);
 document.getElementById('resultado').innerHTML = total;
}
function calcularCK(){
var temp = (document.getElementById('temp').value)*1;
var total = temp + 273.15;
total = total.toFixed(2);
document.getElementById('resultado').innerHTML = total;
}
function calcularFC(){
var temp = (document.getElementById('temp').value)*1;
var total = (temp - 32) / 1.8;
total = total.toFixed(2);
document.getElementById('resultado').innerHTML = total;
}
function calcularFK(){
var temp = (document.getElementById('temp').value)*1;
var total = (temp - 32) / 1.8 + 273.15;
total = total.toFixed(2);
document.getElementById('resultado').innerHTML = total;
}
function calcularKC(){
var temp = (document.getElementById('temp').value)*1;
var total = temp - 273.15;
total = total.toFixed(2);
document.getElementById('resultado').innerHTML = total;
}
function calcularKF(){
var temp = (document.getElementById('temp').value)*1;
var total = (temp - 273.15) * 1.8000 + 32.00;
total = total.toFixed(2);
document.getElementById('resultado').innerHTML = total;
}