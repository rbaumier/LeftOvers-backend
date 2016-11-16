'use strict';

module.exports = (logger) => {
  return require('common-env/withLogger')(logger).getOrElseAll({
    api: {
      port: 3005,
      cors: {
        origin: ['*'],
        credentials: true
      },
      jwt2: {
        secret: 'NeverShareYourSecret'
      }
    },
    postgres: {
      connectionString: 'postgres://user:password@localhost/db_name'
    }
  });
};
