import DS from 'ember-data';

const attr = DS.attr;

export default DS.Model.extend({
  root: DS.belongsTo('facet', { async: true, inverse: null }),
  parent: DS.belongsTo('facet', { async: true, inverse: 'children' }),
  children: DS.hasMany('facet', { async: true, inverse: 'parent' }),

  name: attr(),
});
