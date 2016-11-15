'use strict';

module.exports = ({ deals }, defaultCallback) => {
  return {
    findAll(request, reply) {
      deals.findAll(defaultCallback(reply));
    },

    create(body, f) {
      deals.create(body, defaultCallback(reply));
    },

    findById(id, f) {
      deals.findById(id, defaultCallback(reply));
    },

    updateById(body, f) {
      deals.update(body, defaultCallback(reply));
    },

    removeById(id, f) {
      deals.removeById(id, defaultCallback(reply));
    }
  };
};
