let http= require('http')
const fs = require('fs');
const express = require('express');
const app = express();
    app.get('/', (req, res) => {
        res.send('Hello World, from express');
        const userData = JSON.parse(fs.readFile("./user.json",{encoding:"utf8"}));
}).listen(300);