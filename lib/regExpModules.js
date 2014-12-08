/** ************
Constants patterns
**************** */


/* 
PARTS
*/
// spaces
var _sp = "[\\t \\r\\n]*";

// function params
var _par = "[\\s\\S]*";

// function content
var _cont = "[\\s\\S]*";

var _AMD_text = "^" + _sp + "\\(" + _sp + "function" + _sp + "\\((" + _par + ")\\)" + _sp + "\\{(" + _cont + ")\\}" + _sp + "\\)" + _sp + "\\((" + _par + ")\\)" + _sp + ";?" + _sp + "$";
//var _CJS_text = "^" + _sp + "\\(" + _sp + "(function" + _sp + "\\(" + _par + "\\)" + _sp + "\\{" + _cont + "\\})" + _sp + "\\)" + _sp + "\\((" + _par + ")\\)" + _sp + ";?$";


/*
Reg Exp
*/
// For AMD modules
var _AMD = new RegExp(_AMD_text, "ig");
//var _CJS = new RegExp(_CJS_text, "ig");



// exports
module.exports = {
    AMD: _AMD/*,
    CJS: _CJS*/
};
