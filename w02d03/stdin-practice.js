process.stdin.setEncoding('utf-8');

process.stdin.on('data', (message) => {
  console.log('terminal says', message);
});
