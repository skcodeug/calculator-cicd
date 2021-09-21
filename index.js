'use strict';

// APP
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// CONSTANTS
const port = process.env.PORT || 3000;
const host = process['env']['APP_URL'];
const server = express();

// MIDDLEWARE
server['set']('views', path.join(__dirname, 'views'));
server['set']('view engine', 'pug');
server['use'](express.static('public'));
server['use'](bodyParser.json());
server['use'](bodyParser.urlencoded({extended: true}));

// ROUTES
server['get']('/', (req, res) => {
  res['send']('Hello Bootcamp008.');
});

// ERROR
server['get']('*', (req, res) => {
    console['log'](req['protocol'] + '://' + req['get']('host') + req['originalUrl']);
    res['status'](404)['send'](
      "Unfortunately, we don't have that page but will cater for it in the future. <br>" +
        `<br> For now, please go to <a href=${host}:${port}> ${host}:${port} </a>`
    );
})

console['log']('test2');
// LISTENER
server.listen(port, () => console.log(`Listening on: ${host}:${port}`));
