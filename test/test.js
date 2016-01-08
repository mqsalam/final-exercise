var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello GitHub', function(done) {
    request(app).get('/').expect('Hello GitHub', done);
  });
});
