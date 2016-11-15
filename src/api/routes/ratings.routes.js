'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/dealers/{id}/rating',
    config: _.assign({}, defaultConfig, {
      handler: handlers.ratings.findAll
    })
  });

  server.route({
    method: 'POST',
    path: '/dealers/{id}/rating',
    config: _.assign({}, defaultConfig, {
      handler: handlers.ratings.create,
      validate: validate.ratings.create
    })
  });

  server.route({
    method: 'PUT',
    path: '/dealers/{dealer_id}/rating/{id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.ratings.updateById,
      validate: validate.ratings.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/dealers/{dealer_id}/rating/{id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.ratings.removeById,
      validate: validate.ratings.removeById
    })
  });
};
