import { module, test } from 'qunit';
import startApp from 'mirage-slow-tests/tests/helpers/start-app';
import destroyApp from 'mirage-slow-tests/tests/helpers/destroy-app';

var application;

module('Acceptance: Index', {
    beforeEach: function() {
        application = startApp();
        server.loadFixtures('facets');
        server.createList('facet', 30);
    },
    afterEach: function() {
        destroyApp(application);
    }
});

test('Check for Facets, testing speed', function(assert) {
    visit('/');

    andThen(function() {
        assert.equal(currentPath(), 'index', 'Index Route');
    });

    andThen(function() {
        assert.equal(find('ul > li').length, 42, '42 records exist, slowly loaded');
        // to check the speed comment out the "afterCreate" within the facet factory
        // WITH afterCreate
        // 1 tests completed in 1787 milliseconds, with 0 failed, 0 skipped, and 0 todo.
        // WITHOUT afterCreate
        // 1 tests completed in 346 milliseconds, with 0 failed, 0 skipped, and 0 todo.
    });
});

