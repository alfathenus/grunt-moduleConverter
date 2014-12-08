'use strict';

var tpl = require("../lib/tplModules"),
    regex = require("../lib/regExpModules"),
    path = require("path");

module.exports = function() {
    'use strict';

    function processFileAMD(data, sourcePath) {
        return data.replace(regex.AMD, tpl.TPL_AMD);
    }

    function processFileCJS(data, sourcePath) {
        var fileName = path.basename(sourcePath, ".js");
        var tpls = tpl.TPl_CJS.concat("").replace("%NAME%", fileName);

        var text = data.replace(regex.AMD, tpls);
        var pattern = "-@@@@";
        var firstIndex = text.indexOf(pattern);
        var secondIndex = text.lastIndexOf(pattern);

        var partOne = text.substring(firstIndex + pattern.length, secondIndex);
        var partTwo = text.substring(secondIndex + pattern.length);

        var requirePart = "";
        if (partOne.length > 0) {
            var sp1 = partOne.split(",");
            var sp2 = partTwo.split(",");
            for (var i = 0; i < sp1.length; i++) {
                requirePart += tpl.TPL_CJS_REQ.concat("").replace("%MOD%", sp1[i]).replace("%MOD_REQ%", "\"" + sp2[i] + "\"");
            }
        }

        return requirePart + text.substr(0, firstIndex);
    }

    return {
        AMD: processFileAMD,
        CJS: processFileCJS
    };
}();
