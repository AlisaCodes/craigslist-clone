import DS from 'ember-data';

export default DS.Model.extend({
  heading: DS.attr(),
  categories: DS.hasMany('category', { async:true })
});
