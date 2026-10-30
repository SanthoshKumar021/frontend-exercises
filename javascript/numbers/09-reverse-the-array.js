const numbers = [10, 20, 30, 40, 50];

const reversedArray = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversedArray.push(numbers[i]);
}

console.log(reversedArray);