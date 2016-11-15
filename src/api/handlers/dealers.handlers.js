'use strict';

module.exports = ({ dealers }, defaultCallback) => {
  return {
    findAll(request, reply) {
      dealers.findAll(defaultCallback(reply));
    },

    create(body, f) {
      dealers.create(body, defaultCallback(reply));
    },

    findById(id, f) {
      dealers.findById(id, defaultCallback(reply));
    },

    updateById(body, f) {
      dealers.update(body, defaultCallback(reply));
    },

    removeById(id, f) {
      dealers.removeById(id, defaultCallback(reply));
    }
  };
};
