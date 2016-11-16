'use strict';

module.exports = (Joi) => {
  const params = {
    deal_id: Joi.string().uuid()
  };

  const payload = {
    title: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(1000).required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    full_price: Joi.number().required(),
    promotion: Joi.number().required(),
    quantity: Joi.number().required(),
    dealer_id: Joi.string().uuid().required()
  };

  return {
    create: {
      payload
    },

    findAll: {},

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
