const config = require ('./array.json')
const fs  = require('fs')
fs.readFile('./array.json','utf8',(err,jsonString)=>{
    if(err){
        console.log("file read failed:",err)
        return
    }
    console.log('file data:',jsonString)

})