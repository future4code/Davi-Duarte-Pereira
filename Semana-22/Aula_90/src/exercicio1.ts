const printCrescentNumbers = (numberToPrint: number, index: number = 0) => {
  if (index <= numberToPrint){
    console.log(index)
    index += 1
    printCrescentNumbers(numberToPrint, index)
  }
}


printCrescentNumbers(5)


const printDecrescentNumbers = (numberToPrint: number) => {
  if (numberToPrint >= 0){
    console.log(numberToPrint)
    numberToPrint -= 1
    printDecrescentNumbers(numberToPrint)
  }
}


printDecrescentNumbers(5)