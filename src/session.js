const _ = require('lodash')
const uuid = require('uuid/v4')
const Immutable = require('immutable')

const Session = {
  create: (socket)=> {
    return {
      socket: socket,
      id: uuid(),
      state: 'NEW',
      rendered: false
    }
  },

  transition: (session, transition)=> {
    const transitions = {
      'NEW': {'GREET': 'NEEDS_USERNAME'},
      'NEEDS_USERNAME': {'ADD_USERNAME': 'NEEDS_PASSWORD'},
      'NEEDS_PASSWORD': {'ADD_PASSWORD': 'AT_PLAY'},
      'AT_PLAY': {}
    }

    const newState = _.get(
      transitions, 
      `${session.state}.${transition}`, 
      session.state
    )

    console.log(session)

    return Immutable.Map(session).merge({
      state: newState,
      rendered: false
    }).toJS
  }
}

module.exports = Session