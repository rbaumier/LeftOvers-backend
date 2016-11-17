'use strict';

module.exports = (Joi) => {
  const params = { user_id: Joi.string().uuid() };
  const payload = {
    firstname: Joi.string().min(2).max(255),
    lastname: Joi.string().min(2).max(255),
    email: Joi.string().email().required(),
    password: Joi.string().max(30).required(),
    geolocation: Joi.string().max(100).required()
  };

  return {
    create: { payload },

    findById: {
      params: params
    },

    updateById: {
      params: params,
      payload: _.assign({}, payload, {
        geolocation: Joi.any().forbidden(),
        password: Joi.any().forbidden()
      })
    }
  };
};
