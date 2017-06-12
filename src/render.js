const sessionView = require('./session-view')

function render(session, store) {
	if (session.rendered === false) {
    	session.socket.write(sessionView(session))
      store.dispatch({type: 'SESSION_RENDERED', payload: session.id})
    }
}

module.exports = render