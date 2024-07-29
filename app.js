const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('Deploying with ECS!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
