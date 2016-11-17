'use strict';
var JWT = require('jsonwebtoken');

module.exports = ({dealers, users}, config) => {
    return {
        check(decoded, request, callback) {
            var token = request.headers.authorization;

            // do your checks to see if the token is valid
            if (!decoded.email || !decoded.password || (Math.floor(Date.now() / 1000) > decoded.exp)) {
                return callback(null, false);
            } else {
                users.findOneBy({token: token}, function (err, user) {
                    if (err) {
                        return f(Boom.wrap(err));
                    }

                    if (!user) {
                        dealers.findOneBy({token: token}, function (err, dealer) {
                            if (err) {
                                return f(Boom.wrap(err));
                            }

                            if (!dealer) {
                                return callback(null, false);
                            } else {
                                if (dealer.token === token) {
                                    return callback(null, true);
                                }
                                return callback(null, true);
                            }
                        });
                    } else {
                        if (user.token === token) {
                            return callback(null, true);
                        }
                    }
                });
            }
        },

        generateToken(credentials) {
            return JWT.sign(credentials, config.api.jwt2.secret);
        }
    };
};
