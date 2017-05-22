var postcss = require('postcss');

//var colors = require('./colors');

module.exports = postcss.plugin('more-colors', function (opts) {
    opts = opts || {};
    // Work with options here

    return function (root, result) {
        console.log(root);

      	// Transform CSS AST here
        root.walkRules(function(rule){
            // Transform each rule here
            rule.walkDecls(function(decl){
                // Transform each property declaration here
                console.log(decl);
              	decl.value = decl.value.replace('lightblack', '#444');
            	decl.value = decl.value.replace('lightpink', '#d47');
              	decl.value = decl.value.replace('lightred', '#e32');
            });
        });
    };
});
