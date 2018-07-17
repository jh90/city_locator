const path = require('path');
const express = require('express');
const morgan = require('morgan');
const db = require('./app/db');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.get('/dir', (req, res) => {
    const { input } = req.query;
    const queryString = {
        text: 'SELECT alias FROM us_cities WHERE alias=$1 LIMIT 10;',
        values: [`${input}*`],
    };
    db.any(queryString).then(rows => {
        res.send(rows);
    });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on 3000`);
});
