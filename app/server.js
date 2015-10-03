const express = require('express');
const { join } = require('path');
const pages = require('./middleware/pages');

const app = express();

let routes = require('./routes');

app.use(express.static(join(__dirname, 'static')));
app.use(pages(routes));

module.exports = app;
