// 1 ) Multiples of 3 and 5
// * -------------------------- &&& -------------------------- *
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.



function multiplosOf3and5(number){
    var list = []
    for(var cada_numero = 0; cada_numero <= 10; cada_numero++){
        if(number % cada_numero == 0){
          list.push(cada_numero)
        }
    }
    return list
}


console.log(multiplosOf3and5(3));
