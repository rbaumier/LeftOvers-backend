'use strict';

const defaultCallback = (reply) => (err, data) => {
  if(err) {
    return reply(Boom.wrap(err));
  }
  reply(data);
};

module.exports = (domains, AuthService) => {
  return {
    dealers: require('./dealers.handlers')(domains, defaultCallback),
    deals: require('./deals.handlers')(domains, defaultCallback),
    preferences: require('./preferences.handlers')(domains, defaultCallback),
    ratings: require('./ratings.handlers')(domains, defaultCallback),
    users: require('./users.handlers')(domains, defaultCallback),
    auth: require('./auth.handlers')(domains, defaultCallback, AuthService)
  };
};
