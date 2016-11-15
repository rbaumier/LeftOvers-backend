'use strict';

module.exports = (db, decaultCallback) => {
  return {
    findAll(f) {
      db.deals.find({}, defaultCallback(f));
    },

    create(body, f) {
      db.deals.insert(body, defaultCallback(f));
    },

    findById(id, f) {
      db.deals.findOne(id, defaultCallback(f));
    },

    updateById(body, f) {
      db.deals.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.deals.destroy({ id }, defaultCallback(f));
    }
  };
};
