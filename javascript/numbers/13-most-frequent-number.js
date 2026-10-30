const numbers = [10, 20, 10, 30, 20, 10, 40];

const numberCount = new Map();

if(numbers.length === 0){
    console.log("Array cant be empty")
}

else {

for (let number of numbers) {
  if (numberCount.has(number)) {
    numberCount.set(number, numberCount.get(number) + 1);
  } else {
    numberCount.set(number, 1);
  }
}

let maxCount = 0;
let mostFrequent;

numberCount.forEach((count, number) => {
  if (count > maxCount) {
    maxCount = count;
    mostFrequent = number;
  }
});

console.log(`Most frequent number: ${mostFrequent}`);
console.log(`Frequency: ${maxCount}`);

}