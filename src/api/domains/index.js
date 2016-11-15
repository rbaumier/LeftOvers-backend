'use strict';

module.exports = (db) => {
  const defaultCallback = (f) => (err, res) => {
    if (err) {
      return f(Boom.wrap(err));
    }
    f(null, res);
  };

  return {
    dealers: require('./dealers.domain')(db, defaultCallback),
    deals: require('./deals.domain')(db, defaultCallback),
    preferences: require('./preferences.domain')(db, defaultCallback),
    ratings: require('./ratings.domain')(db, defaultCallback),
    users: require('./users.domain')(db, defaultCallback)
  };
};
