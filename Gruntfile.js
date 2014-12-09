/*
 * grunt-index
 * https://github.com/Klab-Berlin/grunt-index
 *
 * Copyright (c) 2014 Frederik Rudeck
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    index: {
      options: {
        template: './test/fixtures/template.jst'
      },
      production: {
        templateData: {
          codes: ['app.js'],
          styles: ['app.css']
        },
        dest: './tmp/index.html'
      },
      development: {
        options: {
          template: './test/fixtures/template_dev.jst'
        },
        templateData: {
          codes: ['app_dev.js'],
          styles: ['app_dev.css']
        },
        dest: './tmp/index_dev.html'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'index', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
