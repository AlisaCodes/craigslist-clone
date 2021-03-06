import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('category', {path: '/category/:category_id'});
  this.route('section', {path: '/section/:section_id'});
  this.route('listing', {path: '/listing/:listing_id'});
  this.route('search', {path: '/search/:search_id'});
});

export default Router;
