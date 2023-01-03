const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//Variables de entorno
app.set('port', process.env.PORT ||  3000);
app.use(cors());    
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use('/api', require('./routers/platos.routers'));


module.exports = app;