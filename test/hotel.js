var hotel = require('../hotel.js');
var expect = require('chai').expect;



describe.only('Hotel', () => {
  var hotel1 =
  {
      nome: "Corvinal",
      valor: 120.38,
  };

  var hotel2 =
  {
      nome: "Grifinória",
      valor: 120.66,
  };

  var listaHotel = [hotel1, hotel2];

  describe('Encontra Hotel', () => {

    it('Existe a function encontra hotel', () => {
      expect(hotel.findHotel).to.exist;
    });

    it('Mostra o nome dos Hoteis', () => {
      expect(hotel.findHotel(listaHotel)).to.be.an('array')
    });
  });
  describe('findBetterValue', () => {
    it('Exista findBetterValue', () => {
      expect(hotel.findBetterValue).to.exist;
    });

    it('cria uma lista com os valores da semana dos Hotel ', () => {
      expect(hotel.findBetterValue(listaHotel)).to.be.an('array');
    });
  });
});
