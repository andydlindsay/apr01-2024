require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

require('./database/connect').query('SELECT * FROM products').then(console.log);

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
