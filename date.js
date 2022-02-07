const moment = require('moment');

function bar(format) {
    return moment().format(format);
}

exports.bar = bar;