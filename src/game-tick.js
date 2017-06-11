const _ = require('lodash')

function gameTick(store) {
  _.forEach(store.sessions, session => {
    if (session.rendered === false) {
    	session.socket.write(sessionView(session))
      store.dispatch({type: 'SESSION_RENDERED', payload: session})
    }
  })
}

module.exports = gameTick
