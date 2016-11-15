'use strict';

module.exports = (db, defaultCallback) => {
  return {
    findByUserId(userId, f) {
      db.users.findOne(id, defaultCallback(f));
    },

    upsertByUserId(userId, body, f) {
      db.users.update(body, defaultCallback(f));
    },

    removeByUserId(userId, f) {
      db.users.destroy({ id }, defaultCallback(f));
    }
  };
};
