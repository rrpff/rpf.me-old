var supertest = require('supertest');
var app = require('../app/app');

describe('GET /', function () {
  it('should say hello', function (done) {
    supertest(app)
      .get('/')
      .expect(200, 'hello!', done);
  });
});
