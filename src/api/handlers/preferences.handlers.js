'use strict';

module.exports = ({ preferences }, defaultCallback) => {
  return {
    findAll(request, reply) {
      preferences.findAll(defaultCallback(reply));
    },

    create(body, f) {
      preferences.create(body, defaultCallback(reply));
    },

    findById(id, f) {
      preferences.findById(id, defaultCallback(reply));
    },

    updateById(body, f) {
      preferences.update(body, defaultCallback(reply));
    },

    removeById(id, f) {
      preferences.removeById(id, defaultCallback(reply));
    }
  };
};
