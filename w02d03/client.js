const net = require('net');

const config = {
  host: 'localhost',
  port: 3003
};

const connection = net.createConnection(config);

// console.log(connection); // Socket class

// tell the connection to use utf-8
connection.setEncoding('utf-8');

// listen for incoming messages
connection.on('data', (message) => {
  console.log('from server:', message);
});

// listen for input from the terminal
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (message) => {
  // console.log('terminal says', message);

  // send a message back
  connection.write(message);
});
