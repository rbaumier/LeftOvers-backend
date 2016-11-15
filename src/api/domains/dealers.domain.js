'use strict';

module.exports = (db, defaultCallback) => {
  return {
    findAll(f) {
      db.dealers.find({}, defaultCallback(f));
    },

    create(body, f) {
      db.dealers.insert(body, defaultCallback(f));
    },

    findById(id, f) {
      db.dealers.findOne(id, defaultCallback(f));
    },

    updateById(body, f) {
      db.dealers.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.dealers.destroy({ id }, defaultCallback(f));
    }
  };
};
