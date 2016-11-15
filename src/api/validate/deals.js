'use strict';

module.exports = (Joi) => {
  const params = {
    id: Joi.string().uuid(),
    dealer_id: Joi.string().uuid()
  };

  const payload = {
    title: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(1000).required(),
    startDate: Joi.date().timestamp().required(),
    endDate: Joi.date().timestamp().required(),
    fullPrice: Joi.number().required(),
    promotion: Joi.number().required(),
    quantity: Joi.number().required()
  };

  return {
    create: {
      payload,
      params: _.pick(params, 'dealer_id')
    },

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
