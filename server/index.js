
const express = require('express'); 
const cors = require('cors');
const bodyParser = require ('body-parser');

// components
const Router = require ('./routes/route')
const Connection = require ('./database/db')

const app = express();

app.use(cors())
app.use(express.json({extended :true}));
app.use(express.urlencoded({extended: true}))

app.use('/', Router)

const PORT = 8000

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`) )

Connection();
