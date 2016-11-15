'use strict';

module.exports = ({ preferences }, defaultCallback) => {
  return {
    findByUserId(request, reply) {
      users.findByUserId(request.params.user_id, defaultCallback(reply));
    },

    upsertByUserId(request, reply) {
      users.upsertByUserId(request.payload, defaultCallback(reply));
    },

    removeByUserId(request, reply) {
      users.removeByUserId(request.params.user_id, defaultCallback(reply));
    }
  };
};
