/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const cdc = require('./cdcNews');
const students = require('./models/students');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

app.get('/cdc', (req, res) => {
  cdc.getNews()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/math', (req, res) => {
  students.getStudents()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${port}`);
});
