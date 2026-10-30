const fruits = [];

let largestStringLen = 0;
let largestString = null;
let smallestStringLen = Infinity;
let smallestString = null;

if (fruits.length === 0) {
  console.log("Empty");
  return;
} else {
  fruits.map((fruit) => {
    if (largestStringLen < fruit.length) {
      largestStringLen = fruit.length;
      largestString = fruit;
    }
    if (smallestStringLen > fruit.length) {
      smallestStringLen = fruit.length;
      smallestString = fruit;
    }
  });
}
console.log(largestString);
console.log(smallestString);
