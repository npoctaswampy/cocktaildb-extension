var mongoose = require('mongoose');
var Cocktail = mongoose.model('Cocktail');

function create(req, res) {
    var c = new Cocktail();
    c.strDrink = "hahah";
    c.save();
    console.log(req.body);
}

function update(req, res) {
    console.log(req.body);
}

function remove(req, res) {
    console.log(req.body);
}

module.exports = { create, update, remove }
