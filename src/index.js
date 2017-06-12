const net         = require('net');
const redux       = require('redux')
const uuid        = require('uuid/v4')
const config      = require('./config.json')
const Session     = require('./session')
const reducer     = require('./reducers/index')
const handleInput = require('./handle-input')
const gameTick    = require('./game-tick')

const store = redux.createStore(reducer)

const server = net.createServer( socket => {
  const session = Session.create(socket)
  store.dispatch({type: 'ADD_SESSION', payload: session})

  socket.on('data', (data)=>{
    handleInput(data, store, session.id)
  })
})

server.listen(config.port);

setInterval(()=>{
  gameTick(store)
}, config.tickLength)
