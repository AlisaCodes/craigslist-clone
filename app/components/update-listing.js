import Ember from 'ember';

export default Ember.Component.extend({
  editListing: false,

  actions: {
    listingFormShow() {
      this.set('editListing', true);
    },

    updateListing(listing) {
      var params  = {
        name: this.get('name'),
        description: this.get('description'),
        location: this.get('location'),
        category: this.get('category'),
        date_added: new Date()
      }

      this.sendAction('updateListing', listing, params),
      this.set('editListing', false);
    }
  }
});
