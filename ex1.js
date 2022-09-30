// Variaveis para contar ligado e desligado
var compOn = 0;
var compOff = 0;
// Variavel contadora para repetir 3x a pergunta
var cont = 0;
//Repetir a mesma pergunta,se cont = 3,para
while (cont != 3) {
  var compStatus = Number(prompt("Digite 0 para ligado ou 1 para ligado"));
  if (compStatus == 1) {
    //Se 1,adiciona um computador ligado
    compOn++;
  } 
  if (compStatus == 0) {
    //Se 0,adiciona um computador desligado
    compOff++;
  }
  //Aumenta variável contadora
  cont ++;
}
//Exibição dos computadorees ligados e desligados
console.log(`Existe ${compOn} computador(es) ligado(s)`);
console.log(`Existe ${compOff} computador(es) desligado(s)`);