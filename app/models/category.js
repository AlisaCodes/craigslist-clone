import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  section: DS.belongsTo('section', { async: true }),
  listings: DS.hasMany('listing', { async:true })
});
