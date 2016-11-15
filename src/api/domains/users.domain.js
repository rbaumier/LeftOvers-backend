'use strict';

module.exports = (db, defaultCallback, genHash, getGeolocation) => {
  const genPassword = (pw, [latitude, longitude], f) => {
    genHash(pw, (password) => {
      db.st_geographyfromtext(`SRID=4326;POINT(${latitude} ${longitude})`, (err, res) => {
        if (err) {
          return f(err);
        }
        f(null, {
          password: password,
          geolocation: res[0].st_geographyfromtext
        });
      });
    });
  };

  const getGeolocation = (geo) => {

  }

  return {
    findAll(f) {
      db.users.find({}, defaultCallback(f));
    },

    create(body, f) {
      getPasswordAndGeolocation(body.password, body.geolocation, (err, pwAndGeo) => {
        const user = _.assign({}, body, pwAndGeo);
        db.users.insert(user, defaultCallback(f));
      });
    },

    findById(id, f) {
      db.users.findOne(id, defaultCallback(f));
    },

    updateById(id, body, f) {
      getPasswordAndGeolocation(body.password, body.geolocation, (err, pwAndGeo) => {
        const user = _.assign({ id }, body, pwAndGeo);
        db.users.update(user, defaultCallback(f));
      });
    },

    removeById(id, f) {
      db.users.destroy({ id }, defaultCallback(f));
    }
  };
};
