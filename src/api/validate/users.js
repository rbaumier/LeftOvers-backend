'use strict';

module.exports = (Joi) => {
  const params = { id: Joi.string().uuid() };
  const payload = {
    firstname: Joi.string().min(2).max(255),
    lastname: Joi.string().min(2).max(255),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    adresse: Joi.string().min(2).max(500).required(),
    geolocation: Joi.array().items(Joi.number(), Joi.number()).required()
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