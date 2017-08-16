// 1 ) Multiples of 3 and 5
// * -------------------------- &&& -------------------------- *
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.



function multiplosOf3and5(number1, number2){
    var resultado = 0
    for(var cada_numero = 0; cada_numero < 1000; cada_numero++){
      if(cada_numero % number1 == 0 | cada_numero % number2 == 0) {
        resultado += cada_numero
      };
    };
    return resultado
};

console.log('Chamada com o numero 3 e 5 ')
console.log(multiplosOf3and5(3, 5));
