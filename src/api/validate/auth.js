'use strict';

module.exports = (Joi) => {
    const payload = {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    };

    return {
        login: { payload }
    };
};
