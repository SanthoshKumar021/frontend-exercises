const numbers = [5, 10, 3, 20, 1];

if (numbers.length === 0) {
  console.log("Invalid Input");
} else {
  let largestNum = numbers[0];
  let smallestNumber = numbers[0];

  numbers.forEach((number) => {
    if (largestNum <= number) {
      largestNum = number;
    }if (smallestNumber >= number) {
      smallestNumber = number;
    }
  });

  console.log(`Largest Number : ${largestNum}`);
  console.log(`Smallest Number : ${smallestNumber}`);
}
