const numbers = [10, 50, 30, 50, 20, 40];

const uniqueNumbers = [...new Set(numbers)];

uniqueNumbers.sort((a, b) => b - a);

console.log(uniqueNumbers[1]);
