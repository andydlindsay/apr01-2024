const net = require('net');

const server = net.createServer();

// console.log(server); // Server class

const port = 3003;

// somewhere to store all our connections
const connections = [];

// called when someone connects to the server
server.on('connection', (connection) => {
  console.log('a new client has connected');

  // add this connection to our connections array
  connections.push(connection);

  connection.username = 'alice';

  // send a message back to the client
  // console.log(connection); // Socket class
  connection.write('welcome to the chat room!');

  // set the encoding on the connection
  connection.setEncoding('utf-8');

  // listen for incoming messages
  connection.on('data', (message) => {
    console.log('client says:', message);

    // echo it out to all connected clients
    for (const conn of connections) {
      if (conn !== connection) {
        conn.write(`${connection.username} says: ${message}`);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`tcp server is listening on port ${port}`);
});
