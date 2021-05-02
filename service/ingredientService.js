var mongoose = require('mongoose');
var Ingredient = mongoose.model('Ingredient');

function create(req, res) {
    console.log(req.body);
}

function update(req, res) {
    console.log(req.body);
}

function remove(req, res) {
    console.log(req.body);
}

module.exports = { create, update, remove }
