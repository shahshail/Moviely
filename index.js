const Joi = require('joi');
const config = require('config');
const helmet = require('helmet')
const morgan = require('morgan');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

app.use(helmet)
app.use(express.json());
app.use('/api/genres', genres);


if(app.get('env') == 'development')// To see the current working environment
{
    app.use(morgan('tiny'));
    console.log(`Current environment is: ${app.get('env')}`)
    console.log("Morgan Enabled...")
}

const port = process.env.PORT || 9898;
app.listen(port, () => console.log(`Listening on port ${port}...`));