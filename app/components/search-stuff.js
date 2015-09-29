import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searching() {
      var param = this.get('searchingFor');
      this.sendAction('searching', param);
    }
  }
});
