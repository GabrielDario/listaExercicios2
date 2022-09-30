//const prompt = require("prompt-sync")()
var acao = new Boolean; //Variavel boleana se for 0 ou 1

//Está no subsolo,você quer subir sim(1) ou nao(0)
var acao1 = Number(prompt("Você está no SUBSOLO (Para Cima)." +
  "aperter 0 para false e 1 para true: "));
if (acao1 == 1) { // se for 1, acao é true e mostrar se subir é valido ou nao
  acao = true;
  console.log("Subindo : " + acao)
} else {
  acao = false;
  console.log("Subindo : " + acao)
}
//Está no TERREO,você quer descer sim(1) ou nao(0)
var acao2 = Number(prompt("Você está no TERREO (Para baixo)." +
  "Aperter 0 para false e 1 para true: "));
if (acao2 == 1) {
  acao = true;
  console.log("Descendo : " + acao)
} else {
  acao = false;
  console.log("Descendo : " + acao)
}
//Está no TERREO,você quer subir sim(1) ou nao(0)
var acao3 = Number(prompt("Você está no TERREO (Para cima)." +
  "aperter 0 para false e 1 para true: "));
if (acao3 == 1) {
  acao = true;
  console.log("Subindo : " + acao)
} else {
  acao = false;
  console.log("Subindo : " + acao)
}
//Está no primeiro andar,você quer subir sim(1) ou nao(0)
var acao4 = Number(prompt("Você está no 1ºAndar (Para cima)." +
  "aperter 0 para false e 1 para true: "));
if (acao4 == 1) {
  acao = true;
  console.log("Descendo : " + acao)
} else {
  acao = false;
  console.log("Descendo : " + acao)
}