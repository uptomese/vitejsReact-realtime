const express = require('express');
const app = express();
const PORT = 4000;

//New imports
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'api notti',
  });
});

app.get('/api/runnoti', (req, res) => {
  console.log('notti running');
  res.json({
    message: 'notti running',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
