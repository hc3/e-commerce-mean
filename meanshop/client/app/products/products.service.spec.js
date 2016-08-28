'use strict';

describe('Service: Product', function () {

  // load the service's module
  beforeEach(module('meanshopApp'));

  // instantiate service
  var products;
  beforeEach(inject(function (_Product_) {
    products = _Product_;
  }));

  it('should do something', function () {
    expect(!!products).to.be.true;
  });

});
