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
      db.preferences.findOne({ user_id: userId }, (err, preferences) => {
        if(err) return f(err);
        if(preferences) {
          return db.preferences.update({ user_id: userId }, { radius_meter: body.radius_meter, updated_at: 'now()' }, defaultCallback(f));
        }
        db.preferences.insert(body, defaultCallback(f));
      });
    }
  };
};
