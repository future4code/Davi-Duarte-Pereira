type numbers = {
    quantity: number,
    oddNumbers: number,
    numbersSum: number
};

const arrayOfNumbers: number[] = [1, 2, 3, 4]; 

function numberSummarizer (array: number[]): numbers {
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
    const newNumber: numbers = {
        quantity: array.length,
        oddNumbers: array.filter(number => number % 2 !== 0).length,
        numbersSum: array.reduce(reducer)
    };
    return newNumber;
};

console.log(numberSummarizer(arrayOfNumbers));