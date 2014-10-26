var env = require('ffl-utils').environment;
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(env.MANDRILL_API_KEY);

exports.send = function (subject, sender, recipient, html, callback) {
  var email = recipient.email;
  var override = env.EMAIL_ADDRESS_OVERRIDE;

  if (override) {
    email = override;
  }

  var message = {
    html: html,
    subject: subject,
    from_email: sender.email,
    from_name: sender.name,
    to: [{
      email: email
    }]
  };

  mandrill_client.messages.send({message: message, async: true}, callback.bind(null, null), callback);
};
