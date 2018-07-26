const express = require('express');
const postgres = require('./db/psql');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const compiler = webpack(webpackConfig);
const middleware = webpackMiddleware(compiler, {
    stats: {
      colors: true,
      chunks: false,
    },
  });
app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/dir', (req, res) => {
    const { query } = req;
    if ( query.srchin ) {
      postgres.getCities(query.srchin).then((rows) => {
          res.status(200).json(rows);
      });
    }
    else {
      postgres.getStates(query.srchkey).then((rows) => {
        res.status(200).json(rows);
      });
    }
});

const port = 8008;
app.listen(port, () => {
  console.log(`Listening on 8008`);
});
