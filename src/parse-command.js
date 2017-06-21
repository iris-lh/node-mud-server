const view = require('./view')

function parseCommand(command, session, store) {
  switch (command) {
    case 'inc':
      store.dispatch({type: 'INC'})
      view.addLine(`count: ${store.getState().count}\n`, session, store)
      break;
    case 'dec':
      store.dispatch({type: 'DEC'})
      view.addLine(`count: ${store.getState().count}\n`, session, store)
      break;
  }
}

module.exports = parseCommand
