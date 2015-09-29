import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    searching(param) {
      this.transitionTo('search', param);
    }
  }
});
