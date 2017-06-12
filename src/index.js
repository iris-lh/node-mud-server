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

  //socket.id = uuid()
  //store.dispatch({type: 'ADD_SESSION', payload: socket.id})
  //const inputs = new Inputs(socket, store)

  //socket.write('\nWelcome to the Telnet server!\n\n');
  //socket.write('Username: ')
  socket.on('data', (data)=>{
    // handleInput(data, store, session.id)
    console.log(data)
  })
})

server.listen(config.port);

setInterval(()=>{
  gameTick(store)
}, 1000)
