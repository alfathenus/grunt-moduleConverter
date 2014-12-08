/*
 * grunt-modulesConverter
 * --
 *
 * Copyright (c) 2014 Andres Lozada Mosto
 * Licensed under the MIT license.
 */

'use strict';

var converters = require("../lib/modulesConverterLib");

module.exports = function(grunt) {

    grunt.registerMultiTask('modulesConverter', 'Modules converter', function() {
        'use strict';

        var type = this.data.type || "amd";
        if(["amd", "cjs"].indexOf(type) < -1) {
            type = "amd";
        }
        
        this.files.forEach(function(sources) {
            sources.src.forEach(function(filepath) {
                if (grunt.file.isDir(filepath)) {
                    grunt.file.mkdir(sources.dest);
                } else {
                    var func = (type == "amd") ? converters.AMD : converters.CJS;
                    grunt.file.copy(filepath, sources.dest, {
                        process: func
                    });
                }
            });
        });
    });

};
