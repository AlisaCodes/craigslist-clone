import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    delete(model) {
      model.destroyRecord();
      this.transitionTo('index');
    }
  }
});
