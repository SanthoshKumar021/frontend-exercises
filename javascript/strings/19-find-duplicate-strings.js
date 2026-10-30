const fruits = ["Apple", "banana", "apple", "APPLE"];

const updateCase = fruits.map((fruit) => fruit.toLowerCase());

const uniqueFruits = [...new Set(updateCase)];

const result = [];


uniqueFruits.map((unqFruit) => {
  const filterdArray =
    updateCase.filter((fruit) => fruit === unqFruit).length > 1;

  if (filterdArray) {
    result.push(unqFruit);
  }
});

console.log(result);
