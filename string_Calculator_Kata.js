
//var string = 'a'

function findDelimitador(string){
  if(indexOf(';') == -1 ){retun}
}


function calculadoraKata(string) {
  var numero = 0
  if(string == '' || string == ' ') {
    return 0
  }
  for(var cada_letra = 0; cada_letra <= string.length; cada_letra++) {
    if(!isNaN(string[cada_letra])){
      numero = numero + parseInt(string[cada_letra]);
    }
  }
  return numero
}


//console.log(calculadoraKata(string));

module.exports = calculadoraKata
