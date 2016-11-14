'use strict';

module.exports = (Joi) => {
  const idParams = { id: Joi.objectId() };
  const payload = { task: Joi.string().min(2).max(500).required() };

  return {
    create: { payload },

    findById: {
      params: idParams
    },

    updateById: {
      payload,
      params: idParams
    },

    removeById: {
      params: idParams
    }
  };
};
