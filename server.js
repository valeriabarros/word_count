const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log('listening on %d', port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});