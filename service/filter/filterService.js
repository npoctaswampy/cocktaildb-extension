
const got = require('got');
const { pipeline } = require('stream');
const mongoose = require('mongoose');
const CocktailDb = mongoose.model('Cocktail');
const cocktailService = require('../cocktailService');

//TODO: Make this DRY-er

function ingredientFilter(req, res) {
    ingredientList = Array.isArray(req.query.ingredient) ? req.query.ingredient : [req.query.ingredient];
    multiIngredient(ingredientList, res, []);
}

function multiIngredient(ingredientList, res, results) {
    if(Array.isArray(ingredientList) && ingredientList.length == 0){
        res.send({drinks: results});
    } else if(Array.isArray(ingredientList)) {
        const dataStream = got(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
            {searchParams: {i: ingredientList[0]}}
        ).then(function (wsCocktails) {
            CocktailDb.find({$or: [
                { strIngredient1: ingredientList[0] }, 
                { strIngredient2: ingredientList[0] }, 
                { strIngredient3: ingredientList[0] }, 
                { strIngredient4: ingredientList[0] }, 
                { strIngredient5: ingredientList[0] }, 
                { strIngredient6: ingredientList[0] }, 
                { strIngredient7: ingredientList[0] }, 
                { strIngredient8: ingredientList[0] }, 
                { strIngredient9: ingredientList[0] }, 
                { strIngredient10: ingredientList[0] }, 
                { strIngredient11: ingredientList[0] }, 
                { strIngredient12: ingredientList[0] }, 
                { strIngredient13: ingredientList[0] }, 
                { strIngredient14: ingredientList[0] }, 
                { strIngredient15: ingredientList[0] }
            ]}, function (err, dbCocktails) {
                if(! wsCocktails.body ) {
                    Array.prototype.push.apply(results, dbCocktails.map((c) => cocktailService.toCocktailPreview(c)));
                    multiIngredient(ingredientList.slice(1), res, results);
                }else {
                    var jsonCocktails = JSON.parse(wsCocktails.body).drinks;
                    dbCocktails.forEach((c) => jsonCocktails.push(cocktailService.toCocktailPreview(c)));
                    Array.prototype.push.apply(results, jsonCocktails);
                    multiIngredient(ingredientList.slice(1), res, results);
                }
            });
        });
    }
}

function alcoholicFilter(req, res) {
    alcoholicList = Array.isArray(req.query.alcoholic) ? req.query.alcoholic : [req.query.alcoholic];
    multiAlcoholic(alcoholicList, res, []);
}

function multiAlcoholic(alcoholicList, res, results) {
    if(Array.isArray(alcoholicList) && alcoholicList.length == 0){
        res.send({drinks: results});
    } else if(Array.isArray(alcoholicList)) {
        const dataStream = got(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
            {searchParams: {a: alcoholicList[0]}}
        ).then(function (wsCocktails) {
            CocktailDb.find({strAlcoholic: alcoholicList[0]}, function (err, dbCocktails) {
                if(! wsCocktails.body ) {
                    Array.prototype.push.apply(results, dbCocktails.map((c) => cocktailService.toCocktailPreview(c)));
                    multiAlcoholic(alcoholicList.slice(1), res, results);
                }else {
                    var jsonCocktails = JSON.parse(wsCocktails.body).drinks;
                    dbCocktails.forEach((c) => jsonCocktails.push(cocktailService.toCocktailPreview(c)));
                    Array.prototype.push.apply(results, jsonCocktails);
                    multiAlcoholic(alcoholicList.slice(1), res, results);
                }
            });
        });
    }
}
  
function glassFilter(req, res) {
    glassList = Array.isArray(req.query.glass) ? req.query.glass : [req.query.glass];
    multiGlass(glassList, res, []);
}

function multiGlass(glassList, res, results) {
    if(Array.isArray(glassList) && glassList.length == 0){
        res.send({drinks: results});
    } else if(Array.isArray(glassList)) {
        const dataStream = got(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
            {searchParams: {g: glassList[0]}}
        ).then(function (wsCocktails) {
            CocktailDb.find({strGlass: glassList[0]}, function (err, dbCocktails) {
                if(! wsCocktails.body ) {
                    Array.prototype.push.apply(results, dbCocktails.map((c) => cocktailService.toCocktailPreview(c)));
                    multiGlass(glassList.slice(1), res, results);
                }else {
                    var jsonCocktails = JSON.parse(wsCocktails.body).drinks;
                    dbCocktails.forEach((c) => jsonCocktails.push(cocktailService.toCocktailPreview(c)));
                    Array.prototype.push.apply(results, jsonCocktails);
                    multiGlass(glassList.slice(1), res, results);
                }
            });
        });
    }
}

function categoryFilter(req, res) {
    categoryList = Array.isArray(req.query.category) ? req.query.category : [req.query.category];
    multiCategory(categoryList, res, []);
}

function multiCategory(categoryList, res, results) {
    if(Array.isArray(categoryList) && categoryList.length == 0){
        res.send({drinks: results});
    } else if(Array.isArray(categoryList)) {
        const dataStream = got(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
            {searchParams: {c: categoryList[0]}}
        ).then(function (wsCocktails) {
            CocktailDb.find({strCategory: categoryList[0]}, function (err, dbCocktails) {
                if(! wsCocktails.body ) {
                    Array.prototype.push.apply(results, dbCocktails.map((c) => cocktailService.toCocktailPreview(c)));
                    multiCategory(categoryList.slice(1), res, results);
                }else {
                    var jsonCocktails = JSON.parse(wsCocktails.body).drinks;
                    dbCocktails.forEach((c) => jsonCocktails.push(cocktailService.toCocktailPreview(c)));
                    Array.prototype.push.apply(results, jsonCocktails);
                    multiCategory(categoryList.slice(1), res, results);
                }
            });
        });
    }
}

module.exports = { alcoholicFilter, ingredientFilter,  glassFilter, categoryFilter }