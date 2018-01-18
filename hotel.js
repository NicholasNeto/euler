// Valor para semana
var hotel_1 =
{
    nome: "Grifinória",
    valor: 49.50
};

var hotel_2 =
{
    nome: "Sonserina",
    valor: 89.99
}

var hotel_3 =
{
    nome: "Corvinal",
    valor: 120.66
};

var hotel_4 =
{
  nome: "Lufa-Lufa",
  valor: 77.50
};

var listaHotel = [hotel_1, hotel_2, hotel_3, hotel_4];

var findHotel = function(listaHotel) {
  var nomeHotel = [];
  for(var cadaHotel = 0; cadaHotel <= listaHotel.length -1; cadaHotel++){
    nomeHotel.push(listaHotel[cadaHotel].nome);
  }

  return nomeHotel
};

var findBetterValue = function(listaHotel) {
  var listOfValue = [];
  for(var x = 0; x <= listaHotel.length -1; x++){
    listOfValue.push(listaHotel[x].valor);
  }
  return listOfValue
}


module.exports = {
    findHotel,
    findBetterValue
}
