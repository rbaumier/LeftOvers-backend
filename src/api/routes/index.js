'use strict';

const defaultConfig = {
  description: 'no notes',
  notes: 'no description',
  tags: ['api'],
  auth: false // TO REMOVE ONCE WE HAVE AUTH
};

module.exports = (server, handlers, validate) => {
  ['deals', 'dealers', 'ratings', 'preferences', 'users'].forEach(module => require(`./${module}.routes.js`)(server, handlers, validate, defaultConfig));
};
