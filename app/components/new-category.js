import Ember from 'ember';

export default Ember.Component.extend({
  addCategory: false,

  actions: {
    categoryFormShow() {
      this.set('addCategory', true);
    },

    saveCategory() {
      var params  = {
        title: this.get('title'),
        section: this.get('section'),
        listings: []
      }

      this.sendAction('saveCategory', params),
      this.set('addCategory', false);

    }
  }
});
