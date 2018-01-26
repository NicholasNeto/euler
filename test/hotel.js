var hotel = require('../hotel.js');
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


describe.only('Hotel', () => {
  var hotel1 =
  {
      nome: "Corvinal",
      valueWeek: 49.50,
      valueWeekend: 130.99

  };

  var hotel2 =
  {
      nome: "Grifinória",
      valueWeek: 79.99,
      valueWeekend: 120.66
  };

  var listaHotel = [hotel1, hotel2];

  describe('Main, start do programa', () => {
    it('existe main', () => {
      expect(hotel.main).to.exist
    });

    it('return the beste Hotel', () => {
      expect(hotel.main(listaHotel)).to.equal('Corvinal')
    });
  });


  describe('Find numbers days hosted', () => {

    var dataEntrada
    var dataSaida

    beforeEach(function () {
      dataEntrada = new Date(2018, 0, 11);
      dataSaida = new Date(2018, 0, 14);
    });

    it('Espero que funtion exist findNumberDays', () => {
      expect(hotel.findNumberDays).to.exist
    });

    it('return with required keys', () => {
      expect(hotel.findNumberDays(dataEntrada, dataSaida)).to.have.all.keys('days', 'week', 'weekend' );
    });

    it('Espero que funtion exist findNumberDays', () => {
      expect(hotel.findNumberDays(dataEntrada, dataSaida)).to.have.property('days', 4);
    });

    it('Espero que funtion exist findNumberDays', () => {
      expect(hotel.findNumberDays(dataEntrada, dataSaida)).to.have.property('week', 2);
    });

    it('Espero que funtion exist findNumberDays', () => {
      expect(hotel.findNumberDays(dataEntrada, dataSaida)).to.have.property('weekend', 2);
    });
  });

  describe('Melhor valor para semana',() => {

    var informationTheGuest = {
      days: 4,
      week: 2,
      weekend: 2
    }

    it('melhor valor para semana baseado nos numero de dias', () => {
      expect(hotel.forWeek).to.exist
    });

    it('calcula e retorna melhor valor ', () => {
      expect(hotel.forWeek(listaHotel, informationTheGuest)).to.be.an('array');
    });

    it('calcula e retorna melhor valor ', () => {
      expect(hotel.forWeek(listaHotel, informationTheGuest)).to.include.deep.ordered.members([{nome: 'Corvinal', valor: 99}, {nome: 'Grifinória', valor: 159.98}]);
    });
  });

  describe('Melhor valor para fim de semana',() => {

    var informationTheGuest = {
      days: 4,
      week: 2,
      weekend: 2
    }

    it('melhor valor para semana baseado nos numero de dias', () => {
      expect(hotel.forWeek).to.exist
    });

    it('calcula e retorna melhor valor ', () => {
      expect(hotel.forWeekend(listaHotel, informationTheGuest)).to.be.an('array');
    });

    it('calcula e retorna melhor valor ', () => {
      expect(hotel.forWeekend(listaHotel, informationTheGuest)).to.include.deep.ordered.members([{nome: 'Corvinal', valor: 261.98}, {nome: 'Grifinória', valor: 241.32}]);
    });
  });
});
