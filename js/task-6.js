let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');

    isNaN(input) ?
        alert('Было введено не число, попробуйте еще раз') : numbers.push(Number(input));
        
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);