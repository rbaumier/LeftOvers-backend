'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/api/dealers/{dealer_id}/rating',
    config: _.assign({}, defaultConfig, {
      handler: handlers.ratings.findAll,
      validate: validate.ratings.findAll
    })
  });

  server.route({
    method: 'POST',
    path: '/api/dealers/{dealer_id}/rating',
    config: _.assign({}, defaultConfig, {
      handler: handlers.ratings.create,
      validate: validate.ratings.create
    })
  });

  server.route({
    method: 'PUT',
    path: '/api/dealers/{dealer_id}/rating/{rating_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.ratings.updateById,
      validate: validate.ratings.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/api/dealers/{dealer_id}/rating/{rating_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.ratings.removeById,
      validate: validate.ratings.removeById
    })
  });
};
