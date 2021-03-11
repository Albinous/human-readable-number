module.exports = function toReadable (number) {
  ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen', 'twenty']
  tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let resultTens = `${tens[Math.trunc(number/10)]} ${ones[number%10]}`
  let resultHundreds = `${ones[Math.trunc(number/100)]} hundred ${ones[Math.trunc(number%100)]}`
  let resultLast = `${ones[Math.trunc(number/100)]} hundred ${tens[Math.trunc((number%100)/10)]} ${ones[number%10]}`;
  if (number === 0) {
    return 'zero'
  } else if(number<=20) {
    return ones[number]
  } else if (number>20 && number<100) {
    return resultTens.trim()
  } else if (number>100 && number%100>0 && number%100<20) {
    return resultHundreds.trim()
  }
   else if (number>=100) {
    return resultLast.trim()
  }
}