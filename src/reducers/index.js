const redux = require('redux')
const sessions = require('./sessions')
const count = require('./count')

module.exports = redux.combineReducers({
  sessions,
  count
})