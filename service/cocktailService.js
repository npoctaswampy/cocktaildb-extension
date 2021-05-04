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
    if(!req.params.id) {
        res.sendStatus(400);
    } else if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.sendStatus(404);
    } else {
        Cocktail.findById(req.params.id).then(function(c) {
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
    if(!req.params.id) {
        res.sendStatus(400);
    } else if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.sendStatus(404);
    } else {
        Cocktail.findByIdAndRemove(req.params.id, function(err,data) {
            if(!err){
                res.sendStatus(200);
            } else {
                console.log(err)
            }
        });
    }
}

function findById(id, callback) {
    Cocktail.findById(id).then(callback);
}

function toCocktailPreview(cocktail) {
    return {
        strDrink: cocktail.strDrink,
        strDrinkThumb: cocktail.strDrinkThumb,
        idDrink: cocktail.strId
    };
}

function fillCocktailFromReq(req, c) {
    if(req.body.strDrink)
        c.strDrink = req.body.strDrink;
    if(req.body.strDrinkAlternate)
        c.strDrinkAlternate = req.body.strDrinkAlternate;
    if(req.body.strTags)
        c.strTags = req.body.strTags;
    if(req.body.strVideo)
        c.strVideo = req.body.strVideo;
    if(req.body.strCategory)
        c.strCategory = req.body.strCategory;
    if(req.body.strIBA)
        c.strIBA = req.body.strIBA;
    if(req.body.strAlcoholic)
        c.strAlcoholic = req.body.strAlcoholic;
    if(req.body.strGlass)
        c.strGlass = req.body.strGlass;
    if(req.body.strInstructions)
        c.strInstructions = req.body.strInstructions;
    if(req.body.strInstructionsES)
        c.strInstructionsES = req.body.strInstructionsES;
    if(req.body.strInstructionsDE)
        c.strInstructionsDE = req.body.strInstructionsDE;
    if(req.body.strInstructionsFR)
        c.strInstructionsFR = req.body.strInstructionsFR;
    if(req.body.strInstructionsIT)
        c.strInstructionsIT = req.body.strInstructionsIT;
    if(req.body.strDrinkThumb)
        c.strDrinkThumb = req.body.strDrinkThumb;
    if(req.body.strIngredient1)
        c.strIngredient1 = req.body.strIngredient1;
    if(req.body.strIngredient2)
        c.strIngredient2 = req.body.strIngredient2;
    if(req.body.strIngredient3)
        c.strIngredient3 = req.body.strIngredient3;
    if(req.body.strIngredient4)
        c.strIngredient4 = req.body.strIngredient4;
    if(req.body.strIngredient5)
        c.strIngredient5 = req.body.strIngredient5;
    if(req.body.strIngredient6)
        c.strIngredient6 = req.body.strIngredient6;
    if(req.body.strIngredient7)
        c.strIngredient7 = req.body.strIngredient7;
    if(req.body.strIngredient8)
        c.strIngredient8 = req.body.strIngredient8;
    if(req.body.strIngredient9)
        c.strIngredient9 = req.body.strIngredient9;
    if(req.body.strIngredient10)
        c.strIngredient10 = req.body.strIngredient10;
    if(req.body.strIngredient11)
        c.strIngredient11 = req.body.strIngredient11;
    if(req.body.strIngredient12)
        c.strIngredient12 = req.body.strIngredient12;
    if(req.body.strIngredient13)
        c.strIngredient13 = req.body.strIngredient13;
    if(req.body.strIngredient14)
        c.strIngredient14 = req.body.strIngredient14;
    if(req.body.strIngredient15)
        c.strIngredient15 = req.body.strIngredient15;
    if(req.body.strMeasure1)
        c.strMeasure1 = req.body.strMeasure1;
    if(req.body.strMeasure2)
        c.strMeasure2 = req.body.strMeasure2;
    if(req.body.strMeasure3)
        c.strMeasure3 = req.body.strMeasure3;
    if(req.body.strMeasure4)
        c.strMeasure4 = req.body.strMeasure4;
    if(req.body.strMeasure5)
        c.strMeasure5 = req.body.strMeasure5;
    if(req.body.strMeasure6)
        c.strMeasure6 = req.body.strMeasure6;
    if(req.body.strMeasure7)
        c.strMeasure7 = req.body.strMeasure7;
    if(req.body.strMeasure8)
        c.strMeasure8 = req.body.strMeasure8;
    if(req.body.strMeasure9)
        c.strMeasure9 = req.body.strMeasure9;
    if(req.body.strMeasure10)
        c.strMeasure10 = req.body.strMeasure10;
    if(req.body.strMeasure11)
        c.strMeasure11 = req.body.strMeasure11;
    if(req.body.strMeasure12)
        c.strMeasure12 = req.body.strMeasure12;
    if(req.body.strMeasure13)
        c.strMeasure13 = req.body.strMeasure13;
    if(req.body.strMeasure14)
        c.strMeasure14 = req.body.strMeasure14;
    if(req.body.strMeasure15)
        c.strMeasure15 = req.body.strMeasure15;
    if(req.body.strImageSource)
        c.strImageSource = req.body.strImageSource;
    if(req.body.strImageAttribution)
        c.strImageAttribution = req.body.strImageAttribution;
    if(req.body.strCreativeCommonsConfirmed)
        c.strCreativeCommonsConfirmed = req.body.strCreativeCommonsConfirmed;
}


module.exports = { create, update, remove, toCocktailPreview, findById }
