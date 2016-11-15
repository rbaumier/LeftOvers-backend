'use strict';

module.exports = (db, decaultCallback) => {
  return {
    findAll(f) {
      db.users.find({}, defaultCallback(f));
    },

    create(body, f) {
      db.users.insert(body, defaultCallback(f));
    },

    findById(id, f) {
      db.users.findOne(id, defaultCallback(f));
    },

    updateById(body, f) {
      db.users.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.users.destroy({ id }, defaultCallback(f));
    }
  };
};
