
//var string = 'a'


function calculadoraKata(string) {

  if(string == '' || string == ' ') {
    return 0
  }
  if(string) {

    if(string.length == 1) {
      var number1 = parseInt(string);
      return number1
    } else if(string.length == 3) {
        var list_de_number = string.split(",");
        var number1 = parseInt(list_de_number[0]);
        var number2 = parseInt(list_de_number[1]);
        return number1 + number2
    }
    // neste ponto EU gostaria de previnir o cdg de entrada de letras isNaN(string)
    if(string.length >= 4 || isNaN(string)){
      return 'invalido'
    }
  }
}


//console.log(calculadoraKata(string));

module.exports = calculadoraKata