const express = require('express');
const app = express();
const PORT = 4000;

//New imports
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

app.get('/api', (req, res) => {
  console.log('123');
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
