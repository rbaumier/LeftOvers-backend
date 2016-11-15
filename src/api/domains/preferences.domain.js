'use strict';

module.exports = (db, defaultCallback) => {
  return {
    findByUserId(userId, f) {
      db.preferences.findOne({ user_id: userId }, defaultCallback(f));
    },

    upsertByUserId(userId, body, f) {
      body.user_id = userId;
      db.preferences.save(body, defaultCallback(f));
    }
  };
};
