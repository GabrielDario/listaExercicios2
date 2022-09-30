//const prompt = require("prompt-sync")()
var andar = new Boolean; //Variavel boleana se for 0 ou 1

//Está no subsolo,você quer subir sim(1) ou nao(0)
var andar = Number(prompt("Qual andar você quer ir?" +
  " 1 para SUBSOLO" +
  " 2 para TERREO" +
  " 3 para 1ºANDAR:  "));
if (andar == 1) {
  subSolo();
}
if (andar == 2) {
  terreo();
}
if (andar == 3) {
  pAndar();
}
function pAndar() {
  var acao = Number(prompt("1º Andar - Você quer subir ou descer?" +
    "1 SUBIR 0 DESCER: "));
  if (acao == 1) {
      console.log("SUBIU");
    console.log("FIM");
  } else if (acao == 0) {
    console.log("Desceu");
    terreo();
  }
}
function terreo() {
  var acao = Number(prompt("TERREO - Você quer subir ou descer? 1 " +
    "SUBIR 0 DESCER: "));
  if (acao == 1) {
    console.log("SUBIU");
    pAndar();
  } else if (acao == 0) {
    console.log("Desceu");
    subSolo();
  }
}

function subSolo() {
  var acao = Number(prompt("SUBSOLO - Você quer subir ou descer? " +
  "1 SUBIR 0 DESCER:  "));
  if (acao == 1) {
    console.log("SUBIU");
    terreo();
  } else if (acao == 0) {
    console.log("Desceu");
    console.log("FIM");
  }
}