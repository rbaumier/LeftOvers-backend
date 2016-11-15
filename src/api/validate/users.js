'use strict';

module.exports = (Joi) => {
  const params = { user_id: Joi.string().uuid() };
  const payload = {
    firstname: Joi.string().min(2).max(255),
    lastname: Joi.string().min(2).max(255),
    email: Joi.string().email().required(),
    password: Joi.string().max(30).required(),
    address: Joi.string().min(2).max(500).required(),
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
