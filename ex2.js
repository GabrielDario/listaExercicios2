// const prompt = require("prompt-sync")() // Para rodar no node
// Variaveis para sala e iniciando como desligada
var salaA = new Boolean();
var salaB = new Boolean();
salaA = false;
salaB = false;
// Variavel contadora para repetir 3x a pergunta
var cont = 0;
//Repetir a mesma pergunta,se cont = 3,para
while (cont != 3) {
  var compStatus = Number(prompt("Digite 0 para ligado ou 1 para ligado: "));
  //Se a sala 1 e 2...
  if (cont == 0 || cont == 1) {
    //... for ligaada
    if (compStatus == 1) {
      salaA = true; // a sala A está ligada
    }
  }
  //Verificando ultima sala
  if (cont == 2) {
    if (compStatus == 1) {
      salaB = true;
    }
  }
  //Aumenta variável contadora
  cont++;
}
//Condições para ver se as variaveis de sala estao ligada ou desligada
if (salaA == false && salaB == false) { //Se as duas foram falas
  console.log("Duas salas estão com computadores desligados");
} 
if (salaA == true && salaB == false) {//Se somenta salaA esta ligada
  console.log("Somente a sala A tem computador ligado");
}
if (salaA == false && salaB == true) {//Se somenta salaB esta ligada
  console.log("Somente a sala B tem computador ligado");
}
if (salaA == true && salaB == true) {//Se as duas foram verdadeiras
  console.log("As duas salas tem computador ligado");
}