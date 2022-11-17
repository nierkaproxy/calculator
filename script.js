const calc = prompt('Iveskite zenkla ( +, -, * arba / ): ');

const number1 = parseFloat(prompt('Iveskite pirmaji skaiciu: '));
const number2 = parseFloat(prompt('Iveskite antraji skaiciu: '));

let result;

if (calc == '+') {
    result = number1 + number2;
}
else if (calc == '-') {
    result = number1 - number2;
}
else if (calc == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${calc} ${number2} = ${result}`);