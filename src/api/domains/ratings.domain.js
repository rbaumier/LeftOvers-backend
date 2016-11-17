'use strict';

module.exports = (db, defaultCallback) => {
    return {
        findAll(f) {
            db.ratings.find({deleted_at: null}, (err, ratings) => {
                var userIds = _.map(ratings, 'user_id');

                db.users.find({
                    id: _.isEmpty(userIds) ? ['b578eca3-079b-44f2-83da-2d6ebd034ad1'] : userIds // little hack here, we can't search with IN (`emptylist`) crash, so we provide a dummy uuid
                }, (err, users) => {
                    if (err) {return f(Boom.wrap(err));}
                    const RatingsWithUser = _.map(ratings, (rating) => {
                        rating.user = _.find(users, {id: rating.id});
                        return rating;
                    });
                    f(null, RatingsWithUser);
                });
            });
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
            db.ratings.update({id, updated_at: 'now()', deleted_at: 'now()'}, defaultCallback(f));
        }
    };
};
