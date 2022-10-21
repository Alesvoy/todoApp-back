const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the server');
});

const port = 4000;

app.listen(port, () => {
  console.log('server running on port 4000');
});
