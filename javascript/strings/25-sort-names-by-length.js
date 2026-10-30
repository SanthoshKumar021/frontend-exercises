const names =  ["Tony", "Steve rogers", "Furry", "BruceBanner"];

const sortedNames=[...names].sort((a, b) => a.length !== b.length ? a.length - b.length : a.localeCompare(b))

console.log(sortedNames);