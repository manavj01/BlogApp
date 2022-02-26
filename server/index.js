
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// components
const Router = require('./routes/route')
const Connection = require('./database/db')
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/', Router);


app.listen(config.PORT, () => {
  console.log(`server is running on port ${config.PORT}`);
  console.log(`---------------------------------`);
})

Connection();
