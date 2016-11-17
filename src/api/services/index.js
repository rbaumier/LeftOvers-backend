'use strict';

module.exports = (domains, config) => {
  return {
    AuthService: require('./AuthService')(domains, config)
  };
};
