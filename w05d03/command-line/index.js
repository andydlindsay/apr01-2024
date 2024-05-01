const pg = require('pg');

const Client = pg.Client; // single connection to the RDBMS
const Pool = pg.Pool; // collection of Clients (5) - managed

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const client = new Client(config);

client.connect();

const verb = process.argv[2];
// console.log(verb);
const id = process.argv[3];

switch(verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        client.end();
        console.log(response.rows);
      });
    break;

  case 'read':
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((response) => {
        client.end();
        console.log(response.rows[0]);
      });
    break;

  case 'edit':
    const newName = process.argv[4];
    const updateQuery = 'UPDATE movie_villains SET villain = $1 WHERE id = $2;';

    client.query(updateQuery, [newName, id])
      .then(() => {
        client.end();
        console.log('villain updated successfully!');
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const movieName = process.argv[4];

    const insertQuery = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);';
    const valueArr = [villainName, movieName];

    client.query(insertQuery, valueArr)
      .then(() => {
        client.end();
        console.log(`Disney+ is creating a solo series for ${villainName}`);
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        client.end();
        console.log('villain was snapped out of existence');
      });
    break;

  default:
    client.end();
    console.log('please use a BREAD verb');
}




