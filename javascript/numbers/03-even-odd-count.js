const numbers = [1, 2, 3, 4, 5, 6];

const evenCount = numbers.filter((number) => number % 2 === 0).length;

console.log(`Event Count : ${evenCount}`);
console.log(`Odd count : ${numbers.length - evenCount}`);
