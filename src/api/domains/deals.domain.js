'use strict';

module.exports = (db, defaultCallback) => {
  return {
    findAll(f) {
      db.deals.find({deleted_at: null}, defaultCallback(f));
    },

    create(body, f) {
      db.deals.insert(body, defaultCallback(f));
    },

    findById(id, f) {
      db.deals.findOne(id, defaultCallback(f));
    },

    updateById(body, f) {
      body.updated_at = 'now()';
      db.deals.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.deals.update({ id, updated_at: 'now()', deleted_at: 'now()' }, defaultCallback(f));
    }
  };
};
