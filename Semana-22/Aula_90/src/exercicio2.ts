const calculateNumbers = (numberToCalculate: number, total: number = 0) =>  {
  if (numberToCalculate >= 0 ){
    total += numberToCalculate
    numberToCalculate -= 1
    calculateNumbers(numberToCalculate, total)
  } else {
    console.log(total)
  }
}


calculateNumbers(5)