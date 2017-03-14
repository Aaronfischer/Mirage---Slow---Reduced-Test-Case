import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  root: belongsTo('facet', { inverse: null }),
  // required the inverse of parent to be null
  // to not implicity create one-to-one relationship
  parent: belongsTo('facet', { inverse: null }),
  children: hasMany('facet', { inverse: 'parent' }),
});
