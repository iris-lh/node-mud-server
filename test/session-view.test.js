const expect = require('chai').expect
const Session = require('../src/session')
const sessionView = require('../src/session-view')
const config = require('../src/config.json')

let session;

describe('sessionView', ()=>{

	beforeEach(()=>{
    session = Session.create()
  })

  it('shows the greeting', ()=>{
    expect(sessionView(session)).to.match(/Welcome to the Telnet server!/)
  })

	it('shows the username prompt', ()=>{
    session = Session.transition(session, 'GREET')
		expect(sessionView(session)).to.match(/Username:/)
	})

	it('shows the password prompt', ()=>{
    session = Session.transition(session, 'GREET')
    session = Session.transition(session, 'ADD_USERNAME')
		expect(sessionView(session)).to.match(/Password:/)
	})

	it('shows the command prompt', ()=>{
    session = Session.transition(session, 'GREET')
    session = Session.transition(session, 'ADD_USERNAME')
    session = Session.transition(session, 'ADD_PASSWORD')
		expect(sessionView(session)).to.equal(config.prompt)
	})

})