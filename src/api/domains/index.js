'use strict';

const bcrypt = require('bcrypt');

module.exports = (db) => {
  const defaultCallback = (f) => (err, res) => {
    if (err) {
      fDebug('SQL')(err);
      return f(Boom.wrap(err));
    }
    f(null, res);
  };

  const genHash = (password, f) => {
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        f(hash);
      });
    });
  };

  const getGeolocation = ([latitude, longitude]) => {

  };

  return {
    dealers: require('./dealers.domain')(db, defaultCallback, genHash, getGeolocation),
    deals: require('./deals.domain')(db, defaultCallback),
    preferences: require('./preferences.domain')(db, defaultCallback),
    ratings: require('./ratings.domain')(db, defaultCallback),
    users: require('./users.domain')(db, defaultCallback, genHash, getGeolocation)
  };
};
