import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.findAll('listing').then(function(listings) {
      return listings.filterBy('name', param.search_id)
    });
  }
});
