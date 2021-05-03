var mongoose = require('mongoose');
var Cocktail = mongoose.model('Cocktail');

function create(req, res) {
    var c = new Cocktail();
    fillCocktailFromReq(req, c);
    c.save().then(function(cocktail){
        return res.json({cocktail: cocktail});
      });
}

function update(req, res) {
    if(!req.body.strId) {
        res.sendStatus(400);
    } else if(!mongoose.Types.ObjectId.isValid(req.body.strId)) {
        res.sendStatus(404);
    } else {
        Cocktail.findById(req.body.strId).then(function(c) {
            if(!c) {
                res.sendStatus(404);
            } else {
                fillCocktailFromReq(req, c);
                c.save().then(function(cocktail){
                    res.json({cocktail: cocktail});
                });
            }
        });
    }
}

function remove(req, res) {
    if(!req.body.strId) {
        res.sendStatus(400);
    } else if(!mongoose.Types.ObjectId.isValid(req.body.strId)) {
        res.sendStatus(404);
    } else {
        Cocktail.findByIdAndRemove(req.body.strId, function(err,data) {
            if(!err){
                res.sendStatus(200);
            } else {
                console.log(err)
            }
        });
    }
}

function fillCocktailFromReq(req, c) {
    c.strDrink = req.body.strDrink;
    c.strDrinkAlternate = req.body.strDrinkAlternate;
    c.strTags = req.body.strTags;
    c.strVideo = req.body.strVideo;
    c.strCategory = req.body.strCategory;
    c.strIBA = req.body.strIBA;
    c.strAlcoholic = req.body.strAlcoholic;
    c.strGlass = req.body.strGlass;
    c.strInstructions = req.body.strInstructions;
    c.strInstructionsES = req.body.strInstructionsES;
    c.strInstructionsDE = req.body.strInstructionsDE;
    c.strInstructionsFR = req.body.strInstructionsFR;
    c.strInstructionsIT = req.body.strInstructionsIT;
    c.strDrinkThumb = req.body.strDrinkThumb;
    c.strIngredient1 = req.body.strIngredient1;
    c.strIngredient2 = req.body.strIngredient2;
    c.strIngredient3 = req.body.strIngredient3;
    c.strIngredient4 = req.body.strIngredient4;
    c.strIngredient5 = req.body.strIngredient5;
    c.strIngredient6 = req.body.strIngredient6;
    c.strIngredient7 = req.body.strIngredient7;
    c.strIngredient8 = req.body.strIngredient8;
    c.strIngredient9 = req.body.strIngredient9;
    c.strIngredient10 = req.body.strIngredient10;
    c.strIngredient11 = req.body.strIngredient11;
    c.strIngredient12 = req.body.strIngredient12;
    c.strIngredient13 = req.body.strIngredient13;
    c.strIngredient14 = req.body.strIngredient14;
    c.strIngredient15 = req.body.strIngredient15;
    c.strMeasure1 = req.body.strMeasure1;
    c.strMeasure2 = req.body.strMeasure2;
    c.strMeasure3 = req.body.strMeasure3;
    c.strMeasure4 = req.body.strMeasure4;
    c.strMeasure5 = req.body.strMeasure5;
    c.strMeasure6 = req.body.strMeasure6;
    c.strMeasure7 = req.body.strMeasure7;
    c.strMeasure8 = req.body.strMeasure8;
    c.strMeasure9 = req.body.strMeasure9;
    c.strMeasure10 = req.body.strMeasure10;
    c.strMeasure11 = req.body.strMeasure11;
    c.strMeasure12 = req.body.strMeasure12;
    c.strMeasure13 = req.body.strMeasure13;
    c.strMeasure14 = req.body.strMeasure14;
    c.strMeasure15 = req.body.strMeasure15;
    c.strImageSource = req.body.strImageSource;
    c.strImageAttribution = req.body.strImageAttribution;
    c.strCreativeCommonsConfirmed = req.body.strCreativeCommonsConfirmed;
}


module.exports = { create, update, remove }
