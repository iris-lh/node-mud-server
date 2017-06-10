module.exports = (state = {
  sessions: {},
  count: 0
}, action)=> {
  switch (action.type) {

    case 'ADD_SESSION':
      var newSessions = Object.assign({}, state.sessions)
      newSessions[action.payload.id] = {
        inputGetter: 'getUsername'
      }
      return Object.assign({}, state, {
        sessions: newSessions
      });

    case 'CHANGE_INPUT_GETTER':
      var newSessions = Object.assign({}, state.sessions)
      newSessions[action.payload.socket.id] = {
        inputGetter: action.payload.inputGetter
      }
      return Object.assign({}, state, {
        sessions: newSessions
      });

    case 'INC':
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case 'DEC':
      return Object.assign({}, state, {
        count: state.count - 1
      });

    default:
      return state
  }
}
