const express = require('express');
const path = require('path');
const db =  require('../database/index.js')
const PORT = 3000;
const app = express();


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/cows', (req, res) => {
  db.read((err, result) => {
    if (err) {
      res.status(500).send('error getting cows');
    } else {
      res.status(200).send(result);
    }
  });
})

app.post('/api/cows', (req, res) => {
  // console.log('body from postman: ', req.body);
  console.log('query from postman: ', req.query);
  var name = req.query.name;
  var description = req.query.description;

  db.create({ name, description }, (err, result) => {
    if (err) {
      // consle.log(err);
      res.status(503).send('unable to add this MooMoo');
    } else {
      // consle.log(result);
      res.status(201).send('MooMoo added successfully');
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});

