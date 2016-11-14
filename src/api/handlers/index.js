'use strict';

module.exports = () => {
  return {
    todos: require('./todos.handlers')()
  };
};
