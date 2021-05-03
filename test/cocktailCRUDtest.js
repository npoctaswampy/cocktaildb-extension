supertest = require('supertest');
app = require('../app');


describe('Simple Filter', function() {
    it('filter ingredients with no arguments', function(done) {
        supertest(app)
            .get('/filter/ingredient')
            .expect('Content-Type', /json/)
            .expect('Content-Length', 0)
            .expect(200, done)
    });
    
    it('filter with one argument', function(done) {
        supertest(app)
            .get('/filter/ingredient')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});