import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' }
    ];
  }
});
