
const got = require('got');
const { pipeline } = require('stream');


function cocktailSearch(req, res) {
    var params = {};
    if( req.query.name ) {
        params = {searchParams: {s: req.query.name}}
    } else if( req.query.firstletter ) {
        params = {searchParams: {f: req.query.firstletter}}
    }

    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        params
    );
    streamSearch(res, dataStream);
  }

function ingredientSearch(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        {searchParams: {i: req.query.ingredient}}
    );
    streamSearch(res, dataStream);
}

function streamSearch(res, dataStream) {
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}

module.exports = { cocktailSearch, ingredientSearch }