// Modified from https://github.com/fragsalat/lib-sass-data-uri

var sass = require('node-sass');
var fs = require('fs');
var path = require('path');
var mime = require('mime-types');


function loadFile(filePath) {
    var absolutePath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
    var normalizedPath = path.normalize(absolutePath).replace(/^file\:|\!.*$/g, '');
    var content = fs.readFileSync(normalizedPath);
    return {content, normalizedPath};
}

function fileToDataURI(filePath) {
    filePath = filePath && filePath.getValue() || filePath;
    var file = loadFile(filePath);
    var mimeType = mime.lookup(file.normalizedPath);
    var base64 = file.content.toString('base64');
    console.log(mimeType, base64.length);
    return `data:${mimeType};base64,${base64}`;
}

module.exports = {
    'data-uri($filePath)': function(filePath, done) {
        var uri = fileToDataURI(filePath);
        return new sass.types.String(uri);
    },
    'data-url($filePath)': function(filePath, done) {
        var uri = fileToDataURI(filePath);
        return new sass.types.String(`url(${uri})`);
    }
};
