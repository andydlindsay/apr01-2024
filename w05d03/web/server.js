require('dotenv').config(); // populates process.env

const express = require('express');
const morgan = require('morgan');

const client = require('./database/connection');

const app = express();
const port = 8081;

app.use(morgan('dev'));

// GET /movie-villains
app.get('/movie-villains', (req, res) => {
  client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((response) => {
      const movieVillains = response.rows;

      // res.render('villains', { movieVillains })
      res.json(movieVillains);
    });
});

// GET /movie-villains/:id
app.get('/movie-villains/:id', (req, res) => {
  const movieVillainId = req.params.id;

  client.query('SELECT * FROM movie_villains WHERE id = $1;', [movieVillainId])
    .then((response) => {
      const villain = response.rows[0];

      res.json(villain);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
