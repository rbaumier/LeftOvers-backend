'use strict';

module.exports = (Joi) => {
  const params = { id: Joi.string().uuid() };
  const payload = {
    radiusMeter: Joi.number().integer().required(),
    user_id: Joi.string().uuid().required()
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
