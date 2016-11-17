'use strict';

module.exports = (db, defaultCallback, genHash, getGeolocation) => {
  return {
    findAll(f) {
      db.dealers.find({deleted_at: null}, defaultCallback(f));
    },

    create(body, f) {
      genHash(body.password, (password) => {
        getGeolocation(body.geolocation, (err, geolocation) => {
          if (err) {
            return f(Boom.wrap(err));
          }
          const user = _.assign({}, body, { password, geolocation });
          db.dealers.insert(user, defaultCallback(f));
        });
      });
    },

    findOneBy(data,f){
      db.dealers.findOne(data, defaultCallback(f));
    },

    findById(id, f) {
      db.dealers.findOne(id, defaultCallback(f));
    },

    updateById(body, f) {
      body.updated_at = 'now()';
      db.dealers.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.dealers.update({ id, updated_at: 'now()', deleted_at: 'now()' }, defaultCallback(f));
    }
  };
};
