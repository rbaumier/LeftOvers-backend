'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/api/users/{user_id}/preferences',
    config: _.assign({}, defaultConfig, {
      handler: handlers.preferences.findByUserId,
      validate: validate.preferences.findByUserId
    })
  });

  server.route({
    method: 'PUT',
    path: '/api/users/{user_id}/preferences',
    config: _.assign({}, defaultConfig, {
      handler: handlers.preferences.upsertByUserId,
      validate: validate.preferences.upsertByUserId
    })
  });
};
