/* eslint-disable no-console */
const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes');

const PORT = 3000;
const app = express();

const helpers = require('./helpers/handlebar-helpers');

const hbs = expressHbs.create({
  extname: '.hbs',
  helpers,
});

app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'dist')));

app.use(routes);

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
