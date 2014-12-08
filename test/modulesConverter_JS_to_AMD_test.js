'use strict';

// modules
var grunt = require('grunt');
var utils = require('./utils').utils;

// tests
var _modulesConverter_JS_to_AMD = {
    moduleWithParams: null,
    moduleWithWindow: null
};


// exports
exports.modulesConverter_JS_to_AMD = utils.fillWithTests(_modulesConverter_JS_to_AMD, "amd", grunt);
