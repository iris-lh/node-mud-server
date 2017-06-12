const Immutable = require('immutable')
const Session = require('../session')

module.exports = (state = {}, action)=> {
  switch (action.type) {

    case 'ADD_SESSION':
      var newSession = action.payload
      var sessionId = newSession.id
      var newState = Immutable.Map(state)
        .set(sessionId, newSession)
        .toJS()
      return newState

    case 'GREET':
      var sessionId = action.payload
      var oldSession = state[sessionId]
      var newSession = Session.transition(oldSession, 'GREET')
      var newState = Immutable.Map(state)
        .set(sessionId, newSession)
        .toJS()
      return newState

    case 'ADD_USERNAME':
      var username = action.payload.data
      var sessionId = action.payload.sessionId
      var oldSession = state[sessionId]
      var newSession = Session.transition(oldSession, 'ADD_USERNAME')
        .set('username', username)
      var newState = Immutable.Map(state)
        .set(sessionId, newSession)
        .toJS()
      return newState

    case 'SESSION_RENDERED':
      var sessionId = action.payload
      var oldSession = state[sessionId]
      var newSession = Immutable.Map(oldSession)
        .set('rendered', true)
      var newState = Immutable.Map(state)
        .set(sessionId, newSession)
        .toJS()
      return newState

    default:
      return state
  }
}
