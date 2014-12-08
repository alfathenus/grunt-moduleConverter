module.exports = {
    TPL_CJS_REQ: "var %MOD% = require(%MOD_REQ%);\n",
    TPl_CJS: "exports.%NAME% = function(){$2}-@@@@$1-@@@@$3",
    TPL_AMD: "define([$3],function($1){$2});"
};