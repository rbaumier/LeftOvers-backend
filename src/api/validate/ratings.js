'use strict';

module.exports = (Joi) => {
  const params = {
    id: Joi.string().uuid(),
    dealer_id: Joi.string().uuid().required()
  };

  const payload = {
    note: Joi.number().min(0).max(5).precision(1).required(),
    comment: Joi.string().max(1000),
    user_id: Joi.string().uuid().required()
  };

  return {
    create: {
      payload,
      params: _.pick(params, 'dealer_id')
    },

    findAll:{
      params: _.pick(params, 'dealer_id')
    },

    findById: {
      params
    },

    updateById: {
      payload,
      params
    },

    removeById: {
      params
    }
  };
};
