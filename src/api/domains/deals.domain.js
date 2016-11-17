'use strict';

module.exports = (db, defaultCallback) => {

  return {
    findAll(geolocation, radius, f) {
      db.run(`SELECT * FROM dealers WHERE ST_DWithin(geolocation, Geography(ST_MakePoint(${geolocation})), $1)`, [radius], (err, dealers) => {
        if (err) return f(err);
        // now get their deals and create a nicely formatted json
        var dealerIds = _.map(dealers, 'id');
        db.deals.find({
          dealer_id: _.isEmpty(dealerIds) ? ['b578eca3-079b-44f2-83da-2d6ebd034ad1'] : dealerIds // little hack here, we can't search with IN (`emptylist`) crash, so we provide a dummy uuid
        }, (err, deals) => {
          if (err) return f(err);
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
      db.deals.findOne(id, (err, deal) => {
        db.dealers.findOne({ id: deal.dealer_id }, (err, dealer) => {
          deal.dealer = dealer;
          f(null, deal);
        })
      });
    },

    findByDealerId(dealer_id, f) {
      db.deals.find({ dealer_id }, (err, deals) => {
        db.dealers.findOne(dealer_id, (err, dealer) => {
          dealer.deals = deals;
          f(null, dealer);
        });
      });
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
