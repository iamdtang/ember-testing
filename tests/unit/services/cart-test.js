import { moduleFor, test } from 'ember-qunit';

moduleFor('service:cart', 'Unit | Service | cart', {
  beforeEach() {
    window.localStorage.removeItem('cart-test');
  }
});

test('it writes items to local storage', function(assert) {
  var cart = this.subject();
  cart.add({ id: 1, product: 'movie 1' });
  cart.add({ id: 2, product: 'movie 2' });
  assert.equal(window.localStorage.getItem('cart-test'), JSON.stringify({
    '1': { id: 1, product: 'movie 1', quantity: 1 },
    '2': { id: 2, product: 'movie 2', quantity: 1 }
  }));
});

test('it updates the quantity by 1 when a duplicate item is added to the cart', function(assert) {
  var cart = this.subject();
  var items;

  cart.add({ id: 1, product: 'movie 1' });
  cart.add({ id: 1, product: 'movie 1' });
  items = JSON.parse(window.localStorage.getItem('cart-test'));

  assert.equal(items['1'].quantity, 2);
});
