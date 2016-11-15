'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
    server.route({
        method: 'GET',
        path: '/dealers/{id}/rating',
        config: _.assign({}, defaultConfig, {
            handler: handlers.todos.findAll
        })
    });

    server.route({
        method: 'POST',
        path: '/dealers/{id}/rating',
        config: _.assign({}, defaultConfig, {
            handler: handlers.todos.create,
            validate: validate.todos.create
        })
    });

    server.route({
        method: 'PUT',
        path: '/dealers/{dealer_id}/rating/{id}',
        config: _.assign({}, defaultConfig, {
            handler: handlers.todos.updateById,
            validate: validate.todos.updateById
        })
    });

    server.route({
        method: 'DELETE',
        path: '/dealers/{dealer_id}/rating/{id}',
        config: _.assign({}, defaultConfig, {
            handler: handlers.todos.removeById,
            validate: validate.todos.removeById
        })
    });
};
