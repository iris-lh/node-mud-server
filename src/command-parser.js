class CommandParser {
  constructor(store) {
    this.store = store
  }

  parse(command) {
    switch (command) {
      case 'inc':
        this.store.dispatch({type: 'INC'})
        break;
      case 'dec':
        this.store.dispatch({type: 'DEC'})
        break;
    }
  }
}

module.exports = CommandParser
