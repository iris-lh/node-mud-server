const parseCommand = require('./command-parser')
const view = require('./view')
const config = require('./config.json')

function handleInput(data, store, sessionId) {
  const dataString = data.toString('utf8').slice(0, -2)
  const state      = store.getState()
  const session    = state.sessions[sessionId]

  switch (session.context) {
    case 'NEW':
      break;

    case 'NEEDS_USERNAME':
      // verify username here
      store.dispatch({
        type: 'ADD_USERNAME', 
        payload: {data: dataString, sessionId: sessionId}
      })
      view.addLine('PASSWORD: ', session, store)
      break;

    case 'NEEDS_PASSWORD':
      // verify password here
      store.dispatch({
        type: 'ADD_PASSWORD', 
        payload: {data: dataString, sessionId: sessionId}
      })
      view.addLine(config.prompt, session, store)
      break;

    case 'AT_PLAY':
      parseCommand(dataString, session, store)
      view.addLine(config.prompt, session, store)
      break;
  }
}

module.exports = handleInput