module.exports = (state = {
  sessions: [],
  count: 0
}, action)=> {
  switch (action.type) {
    case 'ADD_SESSION':
      return Object.assign({}, state, {
          sessions: [...state.sessions, action.payload]
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
