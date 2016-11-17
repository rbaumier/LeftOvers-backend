'use strict';

module.exports = (Joi) => {
  const params = { dealer_id: Joi.string().uuid() };
  const payload = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(1000).required(),
    picture: Joi.string().uri(),
    address: Joi.string().min(2).max(500).required(),
    geolocation: Joi.string().max(100).required(),
    phone: Joi.string().min(10).max(12)
  };

  return {
    create: { payload },

    findById: {
      params: params
    },

    updateById: {
      payload,
      payload: _.assign({}, payload, {
        geolocation: Joi.any().forbidden(),
        password: Joi.any().forbidden()
      })
    },

    removeById: {
      params: params
    }
  };
};
