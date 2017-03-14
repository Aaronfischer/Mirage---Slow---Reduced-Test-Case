export default function( server ) {
  server.loadFixtures('facets');
  server.createList('facet', 30);
}
