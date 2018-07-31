//var assert = require('assert');
var expect = chai.expect;

describe('Array', function() {
  
    describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        expect( [1,2,3].indexOf(4) ).to.equal(-1);
    });

    it('should return size 3 when the value is present', function() {
        expect( [1,2,3].length ).to.equal(3);
      });

  });

});