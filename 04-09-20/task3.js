const data= require('./array.json')
const friends= data.filter(o => o.friends.filter(p => p.name === "Hebert Simon").length > 0).map(q => q.name)
console.log(friends)