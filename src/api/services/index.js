'use strict';

module.exports = (domains) => {
  return {
    AuthService: require('./AuthService')(domains)
  };
};
