
function encontraDelimitador(dados) {
    var lista = dados.split('//');
    return lista [1][0];
  }

function quebraDeLinha(dados){
    var numerosSemQuebraDeLinha = dados.split('\n');
    return numerosSemQuebraDeLinha
  }

function criaListaParaSoma(list, listTemp2){
  for(var cadaNumero = 0; cadaNumero <= listTemp2.length -1; cadaNumero++){
    list.push(listTemp2[cadaNumero]);
  }
  return list
}


function calculadoraKata(dados) {
  var numero = 0;
  var list = [];

  if(dados == '' || dados == ' ') {
    return 0;
  }

  if(dados.length == 1){
    return parseInt(dados);
  }

  if(dados.indexOf('//') != -1) {
     var delimitador = encontraDelimitador(dados);
     var preList = quebraDeLinha(dados);
     var listTemp2 = preList[1].split(delimitador);
     criaListaParaSoma(list, listTemp2);

  } else if(dados.indexOf('\n') != -1) {
    var preList = quebraDeLinha(dados)
    list.push(preList[0])
    var listTemp2 = preList[1].split(',')

    criaListaParaSoma(list ,listTemp2)

  } else {
    var list = dados.split(',')
  }

  var isNegative = Math.min.apply(Math, list);
  var isMax1000 = Math.max.apply(Math, list);

  if(isNegative < 0 ) {
    var texto = 'negatives not allowed:' + isNegative;
    return texto
  } else if(isMax1000 > 1000) {

      var index = isMax1000.toString();
      var string = list.indexOf(index);
      var listaErrada  = list.splice(string);
  }

  for(var cadaLetra = 0; cadaLetra <= list.length -1; cadaLetra++) {
    numero = numero + parseInt(list[cadaLetra])
  }
  return numero;
}

module.exports = calculadoraKata
