const app = require('express')();

app.get('/', (req, res) => {
  res.send('Container pronto');
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
})