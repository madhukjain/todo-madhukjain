const chai = require('chai');
const assert = chai.assert;
const request = require('./requestSimulator.js');
const ResourceNotFound = require('../handlers/resourceNotFound.js');


describe('staticFileHandler',() => {
  describe('GET /bad',() => {
    it('should respond with 404',(done) => {
      const resourceNotFound=new ResourceNotFound('I dont the way');
      const options = {method:'GET',url:'/'};
      request(resourceNotFound.getRequestHandler(),options,(res) => {
        assert.equal(res.statusCode,404);
        done();
      });
    });
  });
});
