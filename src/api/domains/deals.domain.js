'use strict';

module.exports = (db, defaultCallback) => {
  return {
    findAll(geolocation, radius, f) {
      db.run(`SELECT * FROM dealers WHERE ST_DWithin(geolocation, Geography(ST_MakePoint(${geolocation})), $1)`, [radius], function(err, dealers) {
        if(err) return f(err);
        // now get their deals and create a nicely formatted json
        db.deals.find({
          dealer_id: _.map(dealers, 'id')
        }, (err, deals) => {
          if(err) return f(err);
          const dealsWithDealer = _.map(deals, (deal) => {
            deal.dealer = _.find(dealers, { id: deal.dealer_id });
            return deal;
          });
          f(null, dealsWithDealer);
        });
      });
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
