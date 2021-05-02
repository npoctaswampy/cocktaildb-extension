
const got = require('got');
const { pipeline } = require('stream');

function cocktailLookup(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
        {searchParams: {i: req.query.id}}
    );
    streamLookup(res, dataStream);
  }

function ingredientLookup(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
        {searchParams: {iid: req.query.id}}
    );
    streamLookup(res, dataStream);
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