const fruits=['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

const uniqueFruits=[... new Set(fruits)]

uniqueFruits.map(uniqFruit=>{
   const filterdArray= fruits.filter(fruit=> fruit === uniqFruit).length

   console.log(`${uniqFruit} : ${filterdArray}` )
})