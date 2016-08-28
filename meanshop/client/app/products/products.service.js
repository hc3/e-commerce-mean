'use strict';

angular.module('meanshopApp')
  .factory('Product', function () {
    // Service logic
    // ...

	var last_id = 5;
	var example_products = [
		{_id:1, title:'Product1', price:123.54, quantity: 10, description:'Lorem ipsum dolor sit amet'},
  		{_id:1, title:'Product1', price: 123.56, quantity:10, description:'Loren ipsum dolor sit amet'},
  		{_id:1, title:'Product1', price: 123.56, quantity:10, description:'Loren ipsum dolor sit amet'},
  		{_id:1, title:'Product1', price: 123.56, quantity:10, description:'Loren ipsum dolor sit amet'},
  		{_id:1, title:'Product1', price: 123.56, quantity:10, description:'Loren ipsum dolor sit amet'},
  		{_id:1, title:'Product1', price: 123.56, quantity:10, description:'Loren ipsum dolor sit amet'}
	];
	
	return {
		query: function() {
			return example_products;
		};
	
		get: function(params) {
			var result = [];
			angular.forEach(example_products, function (product) {
				if(product._id == params.id)
					return this.product = product;
			},result);
			return result.product;
		};
	}	
	
	

    // Public API here
    return 
  });
