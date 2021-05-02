
const got = require('got');
const { pipeline } = require('stream');


//TODO combine filter methods into one master filter
function alcoholicFilter(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
        {searchParams: {a: req.query.alcoholic}}
    );
    streamFiltered(res, dataStream);
  }

function ingredientFilter(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
        {searchParams: {i: req.query.ingredient}}
    );
    streamFiltered(res, dataStream);
}
  
function glassFilter(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
        {searchParams: {g: req.query.glass}}
    );
    streamFiltered(res, dataStream);
}

function categoryFilter(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
        {searchParams: {c: req.query.category}}
    );
    streamFiltered(res, dataStream);
}


function streamFiltered(res, dataStream) {
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}

module.exports = { alcoholicFilter, ingredientFilter,  glassFilter, categoryFilter }