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
                            return reply({success: false, message: 'Authentication failed. User/Dealer not found.'});
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

                            if (dealer.first_login === true) {
                                dealer.first_login = false;
                            }

                            return dealers.updateById(dealer.id, dealer, function (err, res) {
                                if (err) {
                                    fDebug('SQL')(err);
                                    return f(Boom.wrap(err));
                                }
                                res.type = 'dealers';
                                return reply(res);
                            });
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

                        if (user.first_login === true) {
                            user.first_login = false;
                        }

                        return users.updateById(user.id, user, function (err, res) {
                            if (err) {
                                fDebug('SQL')(err);
                                return f(Boom.wrap(err));
                            }
                            res.type = 'users';
                            return reply(res);
                        });
                    });
                }
            });
        },

        logout(request, reply) {
            var token = request.headers.authorization;
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
                            return reply({success: false, message: 'Authentication failed. User/Dealer not found.'});
                        } else {
                            dealer.token = null;
                            return dealers.updateById(dealer.id, dealer, function (err, res) {
                                if (err) {
                                    fDebug('SQL')(err);
                                    return f(Boom.wrap(err));
                                }

                                return reply({success: true, message: 'successful logout'});
                            });
                        }
                    });
                } else {
                    user.token = null;
                    return users.updateById(user.id, user, function (err, res) {
                        if (err) {
                            fDebug('SQL')(err);
                            return f(Boom.wrap(err));
                        }
                        return reply({success: true, message: 'successful logout'});
                    });
                }


            });
        }
    };
};
