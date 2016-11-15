'use strict';

module.exports = (db, decaultCallback) => {
  return {
    findAll(f) {
      db.ratings.find({}, defaultCallback(f));
    },

    create(body, f) {
      db.ratings.insert(body, defaultCallback(f));
    },

    findById(id, f) {
      db.ratings.findOne(id, defaultCallback(f));
    },

    updateById(body, f) {
      db.ratings.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.ratings.destroy({ id }, defaultCallback(f));
    }
  };
};
