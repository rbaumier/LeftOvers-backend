'use strict';

module.exports = (server, handlers, validate, defaultConfig) => {
    server.route({
        method: 'POST',
        path: '/api/login',
        config: _.assign({}, defaultConfig, {
            auth: false,
            handler: handlers.auth.login,
            validate: validate.auth.login
        })
    });
};
