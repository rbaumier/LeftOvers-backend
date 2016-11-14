'use strict';

module.exports = (logger) => {
  return require('common-env/withLogger')(logger).getOrElseAll({
    api: {
      port: 3005
    }
  });
};
