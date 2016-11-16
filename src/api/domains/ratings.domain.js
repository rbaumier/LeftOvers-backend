'use strict';

module.exports = (db, defaultCallback) => {
  return {
    findAll(f) {
      db.ratings.find({deleted_at: null}, defaultCallback(f));
    },

    create(body, f) {
      db.ratings.insert(body, defaultCallback(f));
    },

    findById(id, f) {
      db.ratings.findOne(id, defaultCallback(f));
    },

    updateById(body, f) {
      body.updated_at = 'now()';
      db.ratings.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.ratings.update({ id, updated_at: 'now()', deleted_at: 'now()' }, defaultCallback(f));
    }
  };
};
