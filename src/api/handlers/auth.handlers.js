'use strict';

const bcrypt = require('bcrypt');

module.exports = ({ users, dealers }, defaultCallback, AuthService) => {

    return {
        login(request, reply) {
            var credentials = [request.payload.email, request.payload.password];
            users.findOneBy({email: credentials[0]}, function (err, user) {
                if (err) {
                    return f(Boom.wrap(err));
                }

                if (!user) {
                    dealers.findOneBy({email: credentials[0]}, function (err, dealer) {
                        if (err) {
                            return f(Boom.wrap(err));
                        }

                        if (!dealer) {
                            return reply({success: false, message: 'Authentication failed. Dealer not found.'});
                        }

                        bcrypt.compare(credentials[1], dealer.password, function (err, res) {
                            if (err) {
                                return f(Boom.wrap(err));
                            }

                            dealer.token = AuthService.generateToken({
                                email: credentials[0],
                                password: credentials[1],
                                exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
                            });
                            return dealers.updateById(dealer, defaultCallback(reply));
                        });

                    });
                } else {
                    bcrypt.compare(credentials[1], user.password, function (err, res) {
                        if (err) {
                            return f(Boom.wrap(err));
                        }

                        user.token = AuthService.generateToken({
                            email: credentials[0],
                            password: credentials[1],
                            exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
                        });

                        return users.updateById(user, defaultCallback(reply));
                    });
                }
            });
        },

        logout(request, reply) {

        }
    };
};