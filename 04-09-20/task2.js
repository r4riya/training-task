const data= require('./array.json')
const fs =require('fs')
fs.readFile('./array.json','utf8',(err,jsonString)=>{
    if(err){
        console.log("file read failed:",err)
        return
    }
    const data = JSON.parse(jsonString)
    let t1 = data.reduce((a, b) => { a[b.company] = [ ...a[b.company] || [], a ]; return a;  }, {})
    console.log('file data:', t1)

})