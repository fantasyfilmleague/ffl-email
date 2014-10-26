var path = require('path');
var jade = require('jade');
var _ = require('underscore');
var moment = require('moment');

module.exports = function (template, data) {
  var file = path.join(__dirname, '../templates/', template + '.jade');
  var template = jade.compileFile(file);
  var viewData = _.extend({}, data, {moment: moment, _: _});
  var html = template(viewData);
  return html;
};
