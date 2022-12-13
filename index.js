
const express = require('express');
const cors = require('cors');
const path = require('path');
// components
const Router = require('./routes/route')
const Connection = require('./database/db')
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.use('/api', Router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
  Connection();
  console.log(`server is running on port ${process.env.PORT}`);
  console.log(`---------------------------------`);
})

