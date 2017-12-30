


function findDelimitador(string) {
    list = string.split('//');
    return list[1][0];
  }

function quebraDeLinha(string){
    var listQuebraDelinha = string.split('\n');
    return listQuebraDelinha
  }


function calculadoraKata(string) {
  var numero = 0

  if(string == '' || string == ' ') {
    return 0;
  }

  if(string.length == 1){
    return parseInt(string);
  }

  if(string.indexOf('//') != -1) {
    var list = []
     var delimitador = findDelimitador(string);
     var listTemp1 = quebraDeLinha(string)
     var listTemp2 = listTemp1[1].split(delimitador)

     for(var cadaNumero = 0; cadaNumero <= listTemp2.length -1; cadaNumero++){
       list.push(listTemp2[cadaNumero]);
     }


  } else {
    if(string.indexOf('\n') != -1){
      var listTemp1 = quebraDeLinha(string)
      var list = []
      list.push(listTemp1[0])
      var listTemp2 = listTemp1[1].split(',')
      for(var cadaNumero = 0; cadaNumero <= listTemp2.length -1; cadaNumero++){
        list.push(listTemp2[cadaNumero]);
      }
    } else {
      var list = string.split(',')
    }
  }

  for(var cadaLetra = 0; cadaLetra <= list.length -1; cadaLetra++) {
    numero = numero + parseInt(list[cadaLetra])
  }
  return numero;
}

module.exports = calculadoraKata
