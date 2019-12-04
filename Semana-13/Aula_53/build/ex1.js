const arrayOfNumbers = [1, 2, 3, 4];
function numberSummarizer(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const newNumber = {
        quantity: array.length,
        oddNumbers: array.filter(number => number % 2 !== 0).length,
        numbersSum: array.reduce(reducer)
    };
    return newNumber;
}
;
console.log(numberSummarizer(arrayOfNumbers));
//# sourceMappingURL=ex1.js.map