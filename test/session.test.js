const assert = require('assert')
const expect = require('chai').expect
const Session = require('../src/session')

let session;

describe('Session', ()=>{

  beforeEach(()=>{
    session = Session.create()
  })

  describe('state changes', ()=>{
  	it('has an initial state', ()=>{
  		expect(session.state).to.equal('NEW')
  	})

    it('can transition from NEW to NEEDS_USERNAME', ()=>{
      session = Session.transition(session, 'GREET') 
      expect(session.state).to.equal('NEEDS_USERNAME')
    })

  	it('can transition from NEEDS_USERNAME to NEEDS_PASSWORD', ()=>{
      session = Session.transition(session, 'GREET') 
  		session = Session.transition(session, 'ADD_USERNAME') 
  		expect(session.state).to.equal('NEEDS_PASSWORD')
  	})

    it('can transition to AT_PLAY', ()=>{
      session = Session.transition(session, 'GREET') 
      session = Session.transition(session, 'ADD_USERNAME')
      session = Session.transition(session, 'ADD_PASSWORD')
      expect(session.state).to.equal('AT_PLAY')
    })

    it('cannot transition to AT_PLAY from NEEDS_USERNAME', ()=>{
      session = Session.transition(session, 'ADD_PASSWORD')
      expect(session.state).to.equal('NEW')
    })
  })

  describe('rendered state', ()=>{
    it('transition sets rendered to false', ()=>{
      session.rendered = true
      session = Session.transition(session, 'GREET') 
      session = Session.transition(session, 'ADD_USERNAME')
      expect(session.rendered).to.be.false
    })
  })


})