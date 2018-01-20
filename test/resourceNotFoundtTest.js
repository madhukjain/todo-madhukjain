const chai = require('chai');
const assert = chai.assert;
const request = require('./requestSimulator.js');
const th = require('./testHelper.js');
const ResourceNotFound = require('../handlers/resourceNotFound.js');


describe('staticFileHandler',()=>{
  describe('GET /bad',()=>{
    it('should respond with 404',done=>{
      let resourceNotFound=new ResourceNotFound('I dont the way');
      request(resourceNotFound.getRequestHandler(),{method:'GET',url:'/'},(res)=>{
        assert.equal(res.statusCode,404);
        done();
      });
    });
  });
});
