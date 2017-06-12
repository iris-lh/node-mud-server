const _ = require('lodash')
const render = require('./render')

function gameTick(store) {
	const state = store.getState()

  _.forEach(state.sessions, session => {
    console.log(session.id)

    if (session.state === 'NEW') {
      store.dispatch({type: 'GREET', payload: session.id})
    }

    render(session, store)
  })
}

module.exports = gameTick
