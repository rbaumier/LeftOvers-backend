'use strict';

module.exports = ({ ratings }, defaultCallback) => {
  return {
    findAll(request, reply) {
      ratings.findAll(defaultCallback(reply));
    },

    create(body, f) {
      ratings.create(body, defaultCallback(reply));
    },

    findById(id, f) {
      ratings.findById(id, defaultCallback(reply));
    },

    updateById(body, f) {
      ratings.update(body, defaultCallback(reply));
    },

    removeById(id, f) {
      ratings.removeById(id, defaultCallback(reply));
    }
  };
};
