'use strict';
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
exports.resolve = resolve;
