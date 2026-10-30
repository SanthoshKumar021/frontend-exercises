const numberArray1=[1, 2, 3, 4, 5]
const numberArray2=[3, 4, 5, 6, 7]

const setArray2=new Set(numberArray2)

const commanNumbers=[... new Set(numberArray1)].filter(number => setArray2.has(number))

console.log(commanNumbers)