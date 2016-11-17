'use strict';

const defaultConfig = {
  description: 'no notes',
  notes: 'no description',
  tags: ['api']
};

module.exports = (server, handlers, validate) => {
  ['deals', 'dealers', 'ratings', 'preferences', 'users', 'auth'].forEach(module => require(`./${module}.routes.js`)(server, handlers, validate, defaultConfig));
};
