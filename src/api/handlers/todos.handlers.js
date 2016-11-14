'use strict';

module.exports = () => {
  return {
    findAll(request, reply) {
      reply([]);
    },

    create(request, reply) {
      reply({});
    },

    findById(request, reply) {
      reply({});
    },

    updateById(request, reply) {
      reply({});
    },

    removeById(request, reply) {
      reply(200);
    }
  };
};
