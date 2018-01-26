// Valor para semana
var hotel_1 =
{
    nome: "Grifinória",
    valueWeek: 49.50,
    valueWeekend: 230.99
};

var hotel_2 =
{
    nome: "Sonserina",
    valueWeek: 89.99,
    valueWeekend: 260.00
}

var hotel_3 =
{
    nome: "Corvinal",
    valueWeek: 120.66,
    valueWeekend: 240.88
};

var hotel_4 =
{
  nome: "Lufa-Lufa",
  valueWeek: 77.50,
  valueWeekend: 450.33
};

var listaHotel = [hotel_1, hotel_2, hotel_3, hotel_4];

var main = function(listaHotel){
  var listValueTotal = [];
  var dataEntrada = new Date(2018, 0, 11);
  var dataSaida = new Date(2018, 0, 14);

  var informacao = findNumberDays(dataEntrada, dataSaida);
  var listForWeek = forWeek(listaHotel, informacao);
  var listForWeekend = forWeekend(listaHotel, informacao);

  for(var x = 0; x < listaHotel.length; x++){
    var valorTotal = listForWeek[x].valor + listForWeekend[x].valor
    listValueTotal.push(valorTotal)
  }

   var bestValue = Math.min.apply(Math, listValueTotal);

   switch (listValueTotal.indexOf(bestValue)) {
     case 0:
       var hotel = listaHotel[0].nome;
       break;
     case 1:
       var hotel = listaHotel[1].nome;
       break;
     case 2:
       var hotel = listaHotel[1].nome;
       break;
     case 3:
       var hotel = listaHotel[1].nome;
       break;
     default:

   }
   console.log(hotel)
  return hotel
}

var findNumberDays = function(dataEntrada, dataSaida) {
  var days = 0;
  var weekend = 0;
  var week = 0;

  while(dataEntrada <= dataSaida){

    days += 1;

    var qualDia = dataEntrada.getDay()

    if(qualDia === 0 || qualDia === 6){
      weekend += 1
    } else {
      week += 1
    }
    dataEntrada.setDate(dataEntrada.getDate() + 1);
  }
  var informationTheGuest =
  {
      days: days,
      week: week,
      weekend: weekend
  };

  return informationTheGuest
}

var forWeek = function(listaHotel, informationTheGuest) {
  var newNumbers = listaHotel.reduce(function (newArray, hotel) {
    var valor = hotel.valueWeek * informationTheGuest.week
    var objet = { nome: hotel.nome, valor: valor }
    newArray.push(objet)
    return newArray
  }, []);

  return newNumbers
}

var forWeekend = function(listaHotel, informationTheGuest) {

  var newNumbers = listaHotel.reduce(function (newArray, hotel) {
    var valor = hotel.valueWeekend * informationTheGuest.weekend
    var objet = { nome: hotel.nome, valor: valor }
    newArray.push(objet)
    return newArray
  }, []);

  return newNumbers
}

module.exports = {
    main,
    findNumberDays,
    forWeek,
    forWeekend
}

  //var subject = (news, callback) => publisher.publish(news, callback);
