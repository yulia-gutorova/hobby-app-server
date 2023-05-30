//node app.js

require('dotenv').config()
const cors = require('cors')
const express = require('express')              //Import exrepss
const app = express()                           //Init exrpess
const mongoose = require('mongoose') 
const connectToMongo = require('./database')           //Import mongoose
const PORT = process.env.PORT || 5001;          //Define port


//app.use(helmet());
app.use(cors());

//middleware
app.use(express.json());  

app.use('/crafts', cors(), craftsRouter);
const passwordsRouter = require('./routes/passwords');

app.use('/passwords', cors(), passwordsRouter);
const craftsRouter = require('./routes/crafts');

//*********************************************************** 
// Base URL

app.get('/', cors(),  function (req, res) 
{
  res.send('Hello Hobby App');
})

//*********************************************************** 

connectToMongo();

//*********************************************************** 
//Listen to server
app.listen(PORT, err => 
    {
        if (err) 
        {
            return console.log('Error', err);
        }
        else
        {
            console.log(`\n***********************************`);
            console.log(`Server listening on port ${PORT}...`);
        }
    });