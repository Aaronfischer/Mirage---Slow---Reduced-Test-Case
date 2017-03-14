import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  rootId: faker.list.cycle(1, 2, 3),
  parentId() { return this.rootId; },

  name() {
    return faker.name.firstName();
  },

  afterCreate(facet, server) {
    // force mirage to save inverse root relationship, set the root.children hasMany
    // PAINFULLY SLOW
    // TODO investigate once mirage has stable 0.3.0 build
    let root = server.schema.facets.where({ id: facet.rootId }).models[0];
    // attempt only if root exists
    if (root) {
      root.childIds = root.childIds.concat(facet.id);
      root.save();
    }
  },
});
