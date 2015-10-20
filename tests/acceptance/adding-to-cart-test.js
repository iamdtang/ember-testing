import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-testing/tests/helpers/start-app';

var application;

module('Acceptance | adding to cart', {
  beforeEach: function() {
    application = startApp();
    window.localStorage.removeItem('cart-test');
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('adding products to our cart', function(assert) {
  visit('/products');
  
  click('#product-0 .btn');
  click('#product-1 .btn');
  click('#product-2 .btn');

  andThen(function() {
    assert.equal(find('#cart .cart-item').length, 3);
  });
});
