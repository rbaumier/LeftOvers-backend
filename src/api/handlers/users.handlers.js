'use strict';

module.exports = ({ users }, defaultCallback) => {
  return {
    findAll(request, reply) {
      users.findAll(defaultCallback(reply));
    },

    create(body, f) {
      users.create(body, defaultCallback(reply));
    },

    findById(id, f) {
      users.findById(id, defaultCallback(reply));
    },

    updateById(body, f) {
      users.update(body, defaultCallback(reply));
    },

    removeById(id, f) {
      users.removeById(id, defaultCallback(reply));
    }
  };
};
