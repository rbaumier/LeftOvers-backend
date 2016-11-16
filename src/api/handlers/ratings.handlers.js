'use strict';

module.exports = ({ ratings }, defaultCallback) => {
  return {
    findAll(request, reply) {
      ratings.findAll(defaultCallback(reply));
    },

    create(request, reply) {
      ratings.create(request.payload, defaultCallback(reply));
    },

    findById(request, reply) {
      ratings.findById(request.params.id, defaultCallback(reply));
    },

    updateById(request, reply) {
      ratings.update(request.payload, defaultCallback(reply));
    },

    removeById(request, reply) {
      ratings.removeById(request.params.dealer_id, defaultCallback(reply));
    }
  };
};
