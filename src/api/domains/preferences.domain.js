'use strict';

module.exports = (db, defaultCallback) => {
  return {
    findByUserId(userId, f) {
      db.preferences.findOne({ user_id: userId }, (err, preferences) => {
        if(err) {
          return f(err);
        }
        f(null, preferences || []);
      });
    },

    upsertByUserId(userId, body, f) {
      body.user_id = userId;
      db.preferences.save(body, defaultCallback(f));
    }
  };
};
