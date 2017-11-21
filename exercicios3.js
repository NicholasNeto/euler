// Largest prime factor

//* -------------------------- &&& -------------------------- *
/**
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

 **/

function ehDisivel(num, div) {
  return num % div == 0
}

var number = 600851475143

function findClosestPrimo (number) {
  var cont = 2
  var result = number

  while(cont <= result) {
    if(ehDisivel(result, cont)){
        result = result / cont

    } else {
      cont ++
    }
  }
  return cont
}

module.exports = findClosestPrimo
