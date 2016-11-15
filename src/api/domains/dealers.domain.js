'use strict';

module.exports = (db, defaultCallback, genHash, getGeolocation) => {
  return {
    findAll(f) {
      db.dealers.find({}, defaultCallback(f));
    },

    create(body, f) {
      genHash(body.password, (password) => {
        getGeolocation(body.geolocation, (err, geolocation) => {
          if (err) {
            return f(Boom.wrap(err));
          }
          const user = _.assign({}, body, pwAndGeo);
          db.users.insert(user, defaultCallback(f));
        });
      });
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
