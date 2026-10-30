const numbers = [5, 5, 5, 5]

const uniqueNumbers=[... new Set(numbers)]


uniqueNumbers.map((num)=>{

  const filterdArray=numbers.filter(number => number === num ).length
  
   console.log(`${num} : ${filterdArray} `)
})


