const Immutable = require('immutable')

module.exports = (state = 0, action)=> {
  switch (action.type) {

    case 'INC':
      console.log('inc dispatched')
      return state + 1

    case 'DEC':
      console.log('dec dispatched')
      return state - 1

    default:
      return state
  }
}
