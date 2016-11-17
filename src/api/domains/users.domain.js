'use strict';

module.exports = (db, defaultCallback, genHash, getGeolocation) => {
  return {
    findAll(f) {
      db.users.find({deleted_at: null}, defaultCallback(f));
    },

    create(body, f) {
      genHash(body.password, (password) => {
        getGeolocation(body.geolocation, (err, geolocation) => {
          if (err) {
            return f(Boom.wrap(err));
          }
          const user = _.assign({}, body, { password, geolocation });
          db.users.insert(user, defaultCallback(f));
        });
      });
    },

    findById(id, f) {
      db.users.findOne(id, defaultCallback(f));
    },

    findOneBy(data,f){
      db.users.findOne(data, defaultCallback(f));
    },

    updateById(id, body, f) {
      body.id = id;
      body.updated_at = 'now()';
      db.users.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.users.update({ id, updated_at: 'now()', deleted_at: 'now()' }, defaultCallback(f));
    }
  };
};
