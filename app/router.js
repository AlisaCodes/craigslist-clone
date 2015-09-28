import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('party');
  this.route('happy');
  this.route('happy-hour');
  this.route('living-with-me');
  this.route('living-with-you');
  this.route('indoor-things');
  this.route('outdoor-things');
  this.route('use-your-body');
  this.route('use-your-mind');
  this.route('relationship-shit');
  this.route('political-shit');
  this.route('use-my-body');
  this.route('use-my-mind');
});

export default Router;
