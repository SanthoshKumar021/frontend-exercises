const namesArray1=['santhosh','arun','nithish','logic','tony']
const namesArray2=['shafeeq','ARUN','Nithish','rajesh','TONY']

const updateCaseArray1=namesArray1.map(name=>name.toLowerCase())
const updateCaseArray2=namesArray2.map(name=>name.toLowerCase())

const setArray2=new Set(updateCaseArray2)

commanNames=[... new Set(updateCaseArray1)].filter(name=>setArray2.has(name))

console.log(commanNames)

