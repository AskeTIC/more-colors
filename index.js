var postcss = require('postcss');

//this package modules
var colors = require('./colors');

module.exports = postcss.plugin('more-colors', function (opts) {
    opts = opts || {};
    // Work with options here

    return function (root, result) {
        //console.log(root);
       	// Transform CSS AST here
        root.walkDecls(function(decl){
            // Transform each property declaration here
            //console.log(decl);
            Object.keys(colors).forEach(function(color) {
                if (decl.value.search(color) != -1) {
                    var colorValue = colors[color];
                    //console.log(colorValue);
                    decl.value = decl.value.replace(color, colorValue);
                }
            });
        });
    };
});
