'use strict';

module.exports = (Joi) => {
  const params = { id: Joi.string().uuid() };
  const payload = {
    radiusMeter: Joi.number().integer().required(),
    user_id: Joi.string().uuid().required()
  };

  return {
    findByUserId: {
      params
    },

    upsertByUserId: {
      payload,
      params
    },

    removeByUserId: {
      params
    }
  };
};
