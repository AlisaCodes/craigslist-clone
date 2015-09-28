import Ember from 'ember';

export default Ember.Component.extend({
  addListing: false,

  actions: {
    listingFormShow() {
      this.set('addListing', true);
    },

    saveListing() {
      var params  = {
        name: this.get('name'),
        description: this.get('description'),
        location: this.get('location')
      }

      this.sendAction('saveListing', params),
      this.set('addListing', false);
    }
  }
});
