/*
 * grunt-index
 * https://github.com/Klab-Berlin/grunt-index
 *
 * Copyright (c) 2014 Frederik Rudeck
 * Licensed under the MIT license.
 */

'use strict';


var doT = require('dot');


module.exports = function(grunt) {

  grunt.registerMultiTask('index', 'Compile a index.html file with doT.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      template: 'default.jst'
    });

    var template = grunt.file.read(options.template);
    var templateData = this.data.templateData || {};

    if (typeof this.data.dest === 'undefined') {
      grunt.log.error('You have to specify a destination in your task configuration');
      return false;
    }

    templateData.dest = this.data.dest;

    var index = doT.template(template)(templateData);

    grunt.file.write(this.data.dest, index);
    grunt.log.writeln('Generated ' + this.data.dest);
  });
};
