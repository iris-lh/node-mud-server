const _ = require('lodash')

class Session {
	constructor() {
    this.state = 'NEEDS_USERNAME'
    this.transitions = {
      'NEEDS_USERNAME': {'ADD_USERNAME': 'NEEDS_PASSWORD'},
      'NEEDS_PASSWORD': {'ADD_PASSWORD': 'AT_PLAY'},
      'AT_PLAY': {}
    }
	}

  transition(transition) {
    this.state = _.get(
      this.transitions, 
      `${this.state}.${transition}`, 
      this.state
    )
  }
}

module.exports = Session