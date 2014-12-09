'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.index = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  global_options: function(test) {
    var actual = grunt.file.read('tmp/index.html');
    var expected = grunt.file.read('test/expected/index.html');
    test.equal(actual, expected, 'should generate an index file with style and script tags.');
    
    test.done();
  },
  custom_options: function(test) {
    var actual = grunt.file.read('tmp/index_dev.html');
    var expected = grunt.file.read('test/expected/index_dev.html');
    test.equal(actual, expected, 'should generate an index file with style and script tags from a custom template.');
    
    test.done();
  },
};
