'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/api/deals',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.findAll,
      validate: validate.deals.findAll,
      auth:false
    })
  });

  server.route({
    method: 'POST',
    path: '/api/deals',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.create,
      validate: validate.deals.create
    })
  });

  server.route({
    method: 'GET',
    path: '/api/deals/search',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.search,
      validate: validate.deals.search,
      auth:false
    })
  });

  server.route({
    method: 'GET',
    path: '/api/deals/{deal_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.findById,
      validate: validate.deals.findById,
      auth:false
    })
  });

  server.route({
    method: 'PUT',
    path: '/api/deals/{deal_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.updateById,
      validate: validate.deals.updateById
    })
  });

  server.route({
    method: 'DELETE',
    path: '/api/deals/{deal_id}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.deals.removeById,
      validate: validate.deals.removeById
    })
  });
};
