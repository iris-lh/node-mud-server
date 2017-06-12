const _ = require('lodash')

const CommandParser = require('./command-parser')
const config = require('./config.json')

class Inputs {
  constructor(socket, store) {
    this.socket = socket
    this.store = store
    this.parser = new CommandParser(store)
    this.messages = {
      getUsername: 'Username: ',
      getPassword: 'Password: ',
      getCommand: config.prompt
    }
  }

  getInput(data) {
    const state = this.store.getState()
    const session = state.sessions[this.socket.id]
    this[session.inputGetter](data)
  }

  login() {
    console.log('login called')
  }

  getUsername(data) {
    console.log('getUsername called')
    const username = data.toString('utf8').slice(0, -2)

    console.log('username:',username)

    const nextInputGetter = 'getPassword'
    this.store.dispatch({
      type: 'CHANGE_INPUT_GETTER', 
      payload: {socket: this.socket, inputGetter: nextInputGetter}
    })
    this.socket.write(this.messages[nextInputGetter])
  }

  getPassword(data) {
    console.log('getPassword called')
    const password = data.toString('utf8').slice(0, -2)

    console.log('password:',password)

    const nextInputGetter = 'getCommand'
    this.store.dispatch({
      type: 'CHANGE_INPUT_GETTER', 
      payload: {socket: this.socket, inputGetter: nextInputGetter}
    })
    this.socket.write(this.messages[nextInputGetter])
  }

  getCommand(data) {
    console.log('getCommand called')
    const command = data.toString('utf8').slice(0, -2)
    console.log(`command: "${command}"`);

    this.parser.parse(command)

    console.log(this.store.getState());
    const response = 'count: ' + this.store.getState().count + '\n'
    console.log(`response: "${response}"`);

    this.socket.write(response)
    this.socket.write(config.prompt)
  }

}

module.exports = Inputs