
const got = require('got');
const { pipeline } = require('stream');
const cocktailService = require('../cocktailService');

function cocktailLookup(req, res) {
    var id = (req.query.id) ? req.query.id : req.params.id;
    const dataStream = got(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
        {searchParams: {i: id}}
    ).then(function(cocktail) {
        if(!cocktail.body) {
            dbCocktailLookup(id, res);
        } else {
            res.send(cocktail.body);
        }
    });
  }

function ingredientLookup(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
        {searchParams: {iid: req.query.id}}
    );
    streamLookup(res, dataStream);
  }

function dbCocktailLookup(id, res) {
    cocktailService.findById(id, function(cocktail) {
        if(!cocktail) {
            res.sendStatus(404);
        } else{
            res.send(cocktail);
        }
    });
}


function streamLookup(res, dataStream) {
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}

module.exports = { cocktailLookup, ingredientLookup }