'use strict';
var JWT = require('jsonwebtoken');

module.exports = ({ dealers, users }, config) => {
  return {
    check(decoded, request, f) {
      var token = request.headers.authorization.replace('Bearer ', ''); // remove Bearer text if present
      // do your checks to see if the token is valid
      if (!decoded.email || !decoded.password || (Math.floor(Date.now() / 1000) > decoded.exp)) {
        return f(null, false);
      }
      users.findOneBy({ token }, (err, user) => {
        if (err) {
          return f(Boom.wrap(err));
        }
        if (user) {
          return f(null, user.token === token);
        }
        dealers.findOneBy({ token }, (err, dealer) => {
          if (err) {
            return f(Boom.wrap(err));
          }
          f(null, !dealer ? false : dealer.token === token);
        });
      });
    },

    generateToken(credentials) {
      return JWT.sign(credentials, config.api.jwt2.secret);
    }
  };
};
