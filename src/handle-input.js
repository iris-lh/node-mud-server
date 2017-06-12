const parseCommand = require('./command-parser')

function handleInput(data, store, sessionId) {
  // DEBUG
  console.log('handleInput called')
  const dataString = data.toString('utf8').slice(0, -2)
  const state      = store.getState()
  const session    = state.sessions[sessionId]

  switch (session.state) {
    case 'NEW':
      break;

    case 'NEEDS_USERNAME':
      // verify username here
      store.dispatch({
        type: 'ADD_USERNAME', 
        payload: {data: dataString, sessionId: sessionId}
      })
      break;

    case 'NEEDS_PASSWORD':
      // verify password here
      store.dispatch({
        type: 'ADD_PASSWORD', 
        payload: {data: dataString, sessionId: sessionId}
      })
      break;

    case 'AT_PLAY':
      parseCommand(dataString, store)
      break;
  }
}

module.exports = handleInput