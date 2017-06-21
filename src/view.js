
const view = {

  sessionView: (session)=> {
    switch (session.context) {

      case 'NEW':
        return '\nWelcome to the Telnet server!\n\n'

      case 'NEEDS_USERNAME':
        return 'Username: '

      case 'NEEDS_PASSWORD':
        return 'Password: '

      case 'AT_PLAY':
        return config.prompt
        
    }
  },

  addLine: (line, session, store)=> {
    store.dispatch({
      type: 'ADD_LINE', 
      payload: {id: session.id, text: line}
    })
  },

  render: function(session, store) {
    const lines = store.getState().sessions[session.id].lines
    // if (session.rendered === false) {
      session.socket.write(lines.join(''))
      store.dispatch({type: 'CLEAR_LINES', payload: session.id})
      store.dispatch({type: 'SESSION_RENDERED', payload: session.id})
    // }
    // store.dispatch({type: 'SESSION_NOT_RENDERED', payload: session.id})
	}

}

module.exports = view