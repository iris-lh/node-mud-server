const Immutable = require('immutable')

module.exports = (state = 0, action)=> {
  switch (action.type) {

    case 'INC':
      return state + 1

    case 'DEC':
      return state - 1

    default:
      return state
  }
}
