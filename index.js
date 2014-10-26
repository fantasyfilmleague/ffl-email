var send = require('./lib/send');
var render = require('./lib/render');
var env = require('ffl-utils').environment;

exports.sendInvitation = function (league, recipient, token, callback) {
  var subject = 'League Invitation';

  var html = render('invitation', {
    token: token,
    league: league,
    applicationUrl: env.APPLICATION_URL
  });

  var sender = {email: 'ffl-noreply@ffl.birdducksoftware.com', name: 'Fantasy Film League'};

  send(subject, sender, recipient, html, callback);
};
