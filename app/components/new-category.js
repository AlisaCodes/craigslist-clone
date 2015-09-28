import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory() {
      var params  = {
        title: this.get('title'),
        section: this.get('section'),
        listings: this.get('listing')
      }

      this.sendAction('saveCategory', params);
    }
  }
});
