const assert = require('assert')
const expect = require('chai').expect
const Session = require('../src/session')

describe('Session', ()=>{

	it('has an initial state', ()=>{
		const session = new Session()
		expect(session.state).to.equal('NEEDS_USERNAME')
	})

	it('can transition from NEEDS_USERNAME to NEEDS_PASSWORD', ()=>{
		const session = new Session()
		session.transition('ADD_USERNAME')
		expect(session.state).to.equal('NEEDS_PASSWORD')
	})

  it('can transition to AT_PLAY', ()=>{
    const session = new Session()
    session.transition('ADD_USERNAME')
    session.transition('ADD_PASSWORD')
    expect(session.state).to.equal('AT_PLAY')
  })

  it('cannot transition to AT_PLAY from NEEDS_USERNAME', ()=>{
    const session = new Session()
    session.transition('ADD_PASSWORD')
    expect(session.state).to.equal('NEEDS_USERNAME')
  })

})