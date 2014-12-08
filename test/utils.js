'use strict';
var _getTestFunction = function(item, type, grunt) {
    var val = item;
    var ty = type;
    return function(test) {
        var actual = grunt.file.read('tmp/' + ty + '/' + val + '.js');
        var expected = grunt.file.read('test/expected/' + ty + '/' + val + '.js');
        test.equal(actual, expected, 'File is not the expected.');

        test.done();
    };
}

exports.utils = {
    fillWithTests: function(values, type, grunt) {
        var ret = {};
        for (var value in values) {
            ret[value] = _getTestFunction(value, type, grunt);
        }
        return ret;
    }
}
