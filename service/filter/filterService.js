
const got = require('got');
const { pipeline } = require('stream');
const mongoose = require('mongoose');
const CocktailDb = mongoose.model('Cocktail');
const cocktailService = require('../cocktailService');

function ingredientFilter(req, res) {
    if(req.query.ingredient) {
        ingredientList = Array.isArray(req.query.ingredient) ? req.query.ingredient : [req.query.ingredient];
        multiQueryParamFilter(ingredientList, res, [], 
            (i) => {return {searchParams: {i: i}}},
            (i) => {return {$or: [
                { strIngredient1: i }, 
                { strIngredient2: i }, 
                { strIngredient3: i }, 
                { strIngredient4: i }, 
                { strIngredient5: i }, 
                { strIngredient6: i }, 
                { strIngredient7: i }, 
                { strIngredient8: i }, 
                { strIngredient9: i }, 
                { strIngredient10: i }, 
                { strIngredient11: i }, 
                { strIngredient12: i }, 
                { strIngredient13: i }, 
                { strIngredient14: i }, 
                { strIngredient15: i }
            ]}});
    } else {
        res.send({drinks: []});
    }
}

function alcoholicFilter(req, res) {
    if(req.query.alcoholic) {
        alcoholicList = Array.isArray(req.query.alcoholic) ? req.query.alcoholic : [req.query.alcoholic];
        multiQueryParamFilter(alcoholicList, res, [], 
            (a) => {return {searchParams: {a: a}}},
            (a) => {return {strAlcoholic: a }} );
    } else {
        res.send({drinks: []});
    }
}
  
function glassFilter(req, res) {
    if(req.query.glass){
        glassList = Array.isArray(req.query.glass) ? req.query.glass : [req.query.glass];
        multiQueryParamFilter(glassList, res, [], 
                              (g) => {return {searchParams: {g: g}}},
                              (g) => {return {strGlass: g}} );
    } else {
        res.send({drinks: []});
    }
}

function categoryFilter(req, res) {
    if(req.query.category){
        categoryList = Array.isArray(req.query.category) ? req.query.category : [req.query.category];
        multiQueryParamFilter(categoryList, res, [], 
            (c) => {return {searchParams: {c: c}}},
            (c) => {return {strCategory: c}} );
    } else {
        res.send({drinks: []});
    }
}

function multiQueryParamFilter(list, res, results, wsSearchParamFunc, dbSearchParamFunc) {
    if(Array.isArray(list) && list.length == 0){
        res.send({drinks: results});
    } else if(Array.isArray(list)) {
        const dataStream = got(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
            wsSearchParamFunc(list[0])
        ).then(function (wsCocktails) {
            CocktailDb.find(dbSearchParamFunc(list[0]), function (err, dbCocktails) {
                if(! wsCocktails.body ) {
                    Array.prototype.push.apply(results, dbCocktails.map((c) => cocktailService.toCocktailPreview(c)));
                    multiQueryParamFilter(list.slice(1), res, results, wsSearchParamFunc, dbSearchParamFunc);
                }else {
                    var jsonCocktails = JSON.parse(wsCocktails.body).drinks;
                    dbCocktails.forEach((c) => jsonCocktails.push(cocktailService.toCocktailPreview(c)));
                    Array.prototype.push.apply(results, jsonCocktails);
                    multiQueryParamFilter(list.slice(1), res, results, wsSearchParamFunc, dbSearchParamFunc);
                }
            });
        });
    }
}

module.exports = { alcoholicFilter, ingredientFilter,  glassFilter, categoryFilter }