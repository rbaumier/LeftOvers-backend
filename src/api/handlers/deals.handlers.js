'use strict';

module.exports = ({ deals }, defaultCallback) => {
  return {
    findAll(request, reply) {
      deals.findAll(defaultCallback(reply));
    },

    create(request, reply) {
      deals.create(request.payload, defaultCallback(reply));
    },

    findById(request, reply) {
      deals.findById(request.params.deal_id, defaultCallback(reply));
    },

    updateById(request, reply) {
      deals.update(request.payload, defaultCallback(reply));
    },

    removeById(request, reply) {
      deals.removeById(request.params.deal_id, defaultCallback(reply));
    }
  };
};
