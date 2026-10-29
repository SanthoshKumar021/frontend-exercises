const numbers = [1.5, 2.5, 3];

const sumOfNumbers = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(sumOfNumbers);
