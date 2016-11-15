'use strict';

module.exports = (Joi) => {
  const params = { user_id: Joi.string().uuid() };
  const payload = {
    radius_meter: Joi.number().integer().required(),
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
