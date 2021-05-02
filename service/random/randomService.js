const got = require('got');
const { pipeline } = require('stream');

function getRandom(req, res) {
    const dataStream = got.stream(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    streamRandom(res, dataStream);
  }

function streamRandom(res, dataStream) {
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}

module.exports = { getRandom }