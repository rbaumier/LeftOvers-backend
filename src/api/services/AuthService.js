'use strict';
var JWT = require('jsonwebtoken');

module.exports = (domains, config) => {
    return {
        check(decoded, request, callback) {
            var token = request.headers.authorization;
            console.log('je check !!', token);

            // do your checks to see if the token is valid
            if (!decoded.email || !decoded.password || (Math.floor(Date.now() / 1000) > decoded.exp)) {
                return callback(null, false);
            } else {
                domains.users.findOneBy({token: token}, function (err, user) {
                    if (err) {
                        return f(Boom.wrap(err));
                    }

                    if (!user) {
                        console.log('pas de user !!');
                        domains.dealers.findOneBy({token: token}, function (err, dealer) {
                            console.log('dealer : ', dealer);
                            if (err) {
                                return f(Boom.wrap(err));
                            }

                            if (!dealer) {
                                return callback(null, false);
                            } else {
                                if (user.token === token) {
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
