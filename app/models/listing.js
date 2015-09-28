import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  category: DS.belongsTo('category', { async:true })
});
