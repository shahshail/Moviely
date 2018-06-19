const express = require('express')
const app = express() // store express object in app reference variable
app.use(express.json());

const genres = [
  { id: 1, name: 'Action' },  
  { id: 2, name: 'Horror' },  
  { id: 3, name: 'Romance' },  
];
app.get('/api/genres', (req, res) => {
    res.send(genres);
  });
  

  app.post('/api/genres', (req, res) => {
    const { error } = validateGenre(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const genre = {
      id: genres.length + 1,
      name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
  });
  


// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listening on ${port}`)
})