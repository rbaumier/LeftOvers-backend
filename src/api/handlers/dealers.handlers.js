'use strict';

module.exports = ({ dealers }, defaultCallback) => {
  return {
    findAll(request, reply) {
      dealers.findAll(defaultCallback(reply));
    },

    create(request, reply) {
      dealers.create(request.payload, defaultCallback(reply));
    },

    findById(request, reply) {
      dealers.findById(request.params.id, defaultCallback(reply));
    },

    updateById(request, reply) {
      dealers.update(request.payload, defaultCallback(reply));
    },

    removeById(request, reply) {
      dealers.removeById(request.params.id, defaultCallback(reply));
    }
  };
};