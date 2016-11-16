'use strict';

module.exports = (db, defaultCallback, genHash, getGeolocation) => {
  return {
    findAll(f) {
      db.users.find({}, defaultCallback(f));
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

    updateById(id, body, f) {
      body.id = id;
      db.users.update(body, defaultCallback(f));
    },

    removeById(id, f) {
      db.users.update({ id, deleted_at: 'now()' }, defaultCallback(f));
    }
  };
};
