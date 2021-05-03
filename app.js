const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/cocktaildb');
mongoose.set('debug', true);

require('./models/cocktail')
require('./models/ingredient')

app.use(require('./routes'));

app.listen(8080)

module.exports = app;