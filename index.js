const express = require('express')
const app = express() // store express object in app reference variable

app.get('/', (req, res) => {
    res.send("Hello World");
});


// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listening on ${port}`)
})