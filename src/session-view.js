const config = require('./config')

function sessionView(session) {
	switch (session.state) {

    case 'NEW':
      return '\nWelcome to the Telnet server!\n\n'

    case 'NEEDS_USERNAME':
      return 'Username: '

    case 'NEEDS_PASSWORD':
      return 'Password: '

    case 'AT_PLAY':
      return config.prompt
      
  }
}

module.exports = sessionView