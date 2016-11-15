'use strict';

module.exports = (Joi) => {
  const params = { id: Joi.string().uuid() };
  const payload = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(1000).required(),
    picture: Joi.string().uri(),
    address: Joi.string().min(2).max(500).required(),
    geolocation: Joi.array().items(Joi.number(), Joi.number()).required(),
    phone: Joi.string().min(10).max(12)
  };

  return {
    create: { payload },

    findById: {
      params: params
    },

    updateById: {
      payload,
      params: params
    },

    removeById: {
      params: params
    }
  };
};
