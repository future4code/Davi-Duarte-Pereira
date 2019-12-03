const operator = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

switch(operator){
    case "add":
        console.log(`answer: ${firstNumber + secondNumber}`);
        break;
    case "sub":
        console.log(`answer: ${firstNumber - secondNumber}`);
        break;
    case "mult":
        console.log(`answer: ${firstNumber * secondNumber}`);
        break;
    case "div":
        console.log(`answer: ${firstNumber / secondNumber}`);
        break;
    default:
        console.log(`operator not found.`);
}