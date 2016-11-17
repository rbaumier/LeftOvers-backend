'use strict';

module.exports = ({ ratings }, defaultCallback) => {
  return {
    findAll(request, reply) {
      ratings.findAll(request.params.dealer_id, defaultCallback(reply));
    },

    create(request, reply) {
      const rating = request.payload;
      rating.dealer_id = request.params.dealer_id;
      ratings.create(rating, defaultCallback(reply));
    },

    findById(request, reply) {
      ratings.findById(request.params.id, defaultCallback(reply));
    },

    updateById(request, reply) {
      const rating = request.payload;
      rating.dealer_id = request.params.dealer_id;
      ratings.update(rating, defaultCallback(reply));
    },

    removeById(request, reply) {
      ratings.removeById(request.params.dealer_id, defaultCallback(reply));
    }
  };
};
