const _ = require('lodash')
const uuid = require('uuid/v4')

const Session = {
  create: (socket)=> {
    return {
      socket: socket,
      id: uuid(),
      state: 'NEW'
    }
  },

  transition: (session, transition)=> {
    const transitions = {
      'NEW': {'GREET': 'NEEDS_USERNAME'},
      'NEEDS_USERNAME': {'ADD_USERNAME': 'NEEDS_PASSWORD'},
      'NEEDS_PASSWORD': {'ADD_PASSWORD': 'AT_PLAY'},
      'AT_PLAY': {}
    }
    return Object.assign({}, session, {
      state: _.get(
        transitions, 
        `${session.state}.${transition}`, 
        session.state
      ),
      rendered: false
    })
  }
}

module.exports = Session