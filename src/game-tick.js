const _ = require('lodash')
const view = require('./view')

function gameTick(store) {
	const state = store.getState()

  _.forEach(state.sessions, session => {

    if (session.context === 'NEW') {
      view.addLine(view.sessionView(session), session, store)
      view.addLine('USERNAME: ', session, store)
      store.dispatch({type: 'GREET', payload: session.id})
    }

    view.render(session, store)
  })
}

module.exports = gameTick
