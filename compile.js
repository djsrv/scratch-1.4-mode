const fs = require('fs');
const UglifyJS = require('uglify-js');
const compressor = UglifyJS.Compressor();
const sass = require('node-sass');
const sassDataURI = require('./sassDataURI');

function processJS (name) {
    console.log(name);

    var script = fs.readFileSync('js/' + name + '.js', 'utf-8');
    script = script.replace(/\$\$(.*?)\$\$/g, function (match, name) {
        return JSON.stringify(processJS(name));
    })

    const ast = UglifyJS.parse(script, {
        bare_returns: true
    });
    ast.figure_out_scope()
    const compressed_ast = compressor.compress(ast);
    compressed_ast.figure_out_scope()
    var compressed_script = compressed_ast.print_to_string();
    if (compressed_script.charAt(compressed_script.length - 1) === ';') {
        compressed_script = compressed_script.substring(0, compressed_script.length - 1);
    }
    return compressed_script;
}

function processSCSS (name) {
    var result = sass.renderSync({
        file: 'scss/' + name + '.scss',
        functions: sassDataURI
    });
    return result.css.toString();
}

var header = fs.readFileSync('userscript_header.js', 'utf-8');
var userscript = processJS('userscript');
fs.writeFileSync('build/scratch_1.4_mode.user.js', header + '\n' + userscript);

var userstyle = processSCSS('userstyle');
fs.writeFileSync('build/scratch_1.4_mode.css', userstyle);
