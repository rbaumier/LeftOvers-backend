'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/dealers/{dealer_id}/deals',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.findAll,
      validate: validate.deals.findAll
    })
  });

  server.route({
    method: 'POST',
    path: '/dealers/{dealer_id}/deals',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.create,
      validate: validate.deals.create
    })
  });

  server.route({
    method: 'GET',
    path: '/dealers/{dealer_id}/deals/{deal_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.findById,
      validate: validate.deals.findById
    })
  });

  server.route({
    method: 'PUT',
    path: '/dealers/{dealer_id}/deals/{deal_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.updateById,
      validate: validate.deals.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/dealers/{dealer_id}/deals/{deal_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.removeById,
      validate: validate.deals.removeById
    })
  });
};
