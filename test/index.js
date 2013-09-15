var isNaN = require('..');

describe('isNaN(value)', function() {
  it('should return true for NaN', function() {
    isNaN(NaN).should.be.true;
    isNaN(new Number(NaN)).should.be.true;
  });
  it('should return false for not NaN', function() {
    isNaN(undefined).should.be.false;
  });
});