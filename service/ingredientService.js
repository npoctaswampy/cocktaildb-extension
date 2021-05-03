var mongoose = require('mongoose');
var Ingredient = mongoose.model('Ingredient');

function create(req, res) {
    var i = new Ingredient();
    fillIngredientFromReq(req, i);
    i.save().then(function(ingredient){
        return res.json({ingredient: ingredient});
      });
}

function update(req, res) {
    if(!req.body.idIngredient) {
        res.sendStatus(400);
    } else if(!mongoose.Types.ObjectId.isValid(req.body.idIngredient)) {
        res.sendStatus(404);
    } else {
        Ingredient.findById(req.body.idIngredient).then(function(i) {
            if(!i) {
                res.sendStatus(404);
            } else {
                fillIngredientFromReq(req, i);
                i.save().then(function(ingredient){
                    res.json({ingredient: ingredient});
                });
            }
        });
    }
}

function remove(req, res) {
    if(!req.body.idIngredient) {
        res.sendStatus(400);
    } else if(!mongoose.Types.ObjectId.isValid(req.body.idIngredient)) {
        res.sendStatus(404);
    } else {
        Ingredient.findByIdAndRemove(req.body.idIngredient, function(err,data) {
            if(!err){
                res.sendStatus(200);
            } else {
                console.log(err)
            }
        });
    }
}

function fillIngredientFromReq(req, i) {
    i.strIngredient = req.body.strIngredient;
    i.strDescription = req.body.strDescription;
    i.strType = req.body.strType;
    i.strAlcohol = req.body.strAlcohol;
    i.strABV = req.body.strABV;
}

module.exports = { create, update, remove }
