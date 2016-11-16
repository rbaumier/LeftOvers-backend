'use strict';

module.exports = ({ users }, defaultCallback) => {
  return {
    findAll(request, reply) {
      users.findAll(defaultCallback(reply));
    },

    create(request, reply) {
      users.create(request.payload, defaultCallback(reply));
    },

    findById(request, reply) {
      users.findById(request.params.user_id, defaultCallback(reply));
    },

    updateById(request, reply) {
      users.updateById(request.params.user_id, request.payload, defaultCallback(reply));
    },

    removeById(request, reply) {
      users.update({id:request.params.id, deleted_at:_.now()}, defaultCallback(reply));
    }
  };
};
