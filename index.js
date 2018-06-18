const express = require('express')
const app = express() // store express object in app reference variable

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () =>{
    console.log("Listening on port 3000")
})