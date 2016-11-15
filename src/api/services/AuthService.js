'use strict';

module.exports = (domains) => {
  return {
    check(decoded, request, callback) {
      callback(null, true);
    }
  };
};
