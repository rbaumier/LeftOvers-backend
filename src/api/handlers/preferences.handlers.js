'use strict';

module.exports = ({ preferences }, defaultCallback) => {
  return {
    findByUserId(request, reply) {
      preferences.findByUserId(request.params.user_id, defaultCallback(reply));
    },

    upsertByUserId(request, reply) {
      preferences.upsertByUserId(request.params.user_id, request.payload, defaultCallback(reply));
    }
  };
};
