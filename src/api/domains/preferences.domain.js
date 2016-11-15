'use strict';

module.exports = (db, decaultCallback) => {
  return {
    findAll(f) {
      db.preferences.find({}, defaultCallback(f));
    },

    create(body, f) {
      db.preferences.insert(body, defaultCallback(f));
    },

    findById(id, f) {
      db.preferences.findOne(id, defaultCallback(f));
    },

    updateById(body, f) {
      db.preferences.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.preferences.destroy({ id }, defaultCallback(f));
    }
  };
};
