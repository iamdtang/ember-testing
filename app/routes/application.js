import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('cart').add(item);
      this.controllerFor('application').set('cartItems', this.get('cart').all());
    }
  }
});
