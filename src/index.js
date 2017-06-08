const net           = require('net');
const redux         = require('redux')

const CommandParser = require('./CommandParser')
const reducer       = require('./reducer.js')
const gameTick      = require('./game-tick.js')



const port = 4000
const store = redux.createStore(reducer)
const Parser = new CommandParser(store)
const prompt = '>> '



function getCommand(data, asdf) {
  const command = data.toString('utf8').slice(0, -2)
  console.log(`command: "${command}"`);

  Parser.parse(command)

  console.log(store.getState());
  console.log(asdf)
  const response = 'state: ' + store.getState().count
  console.log(`response: "${response}"`);

  // this.write(Buffer.from(response + '\n'))
  this.write(prompt)
}



const server = net.createServer( socket => {
  socket.write('\nWelcome to the Telnet server!\n\n');
  socket.on('data', getCommand, 'asdf')
  console.log(socket.remoteAddress);
})

server.listen(port);

setInterval(()=>{
  gameTick(store)
}, 1000)
