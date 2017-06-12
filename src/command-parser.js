// class CommandParser {
//   constructor(store) {
//     this.store = store
//   }

//   parse(command) {
//     switch (command) {
//       case 'inc':
//         this.store.dispatch({type: 'INC'})
//         break;
//       case 'dec':
//         this.store.dispatch({type: 'DEC'})
//         break;
//     }
//   }
// }

function parseCommand(command, store) {
  console.log('parseCommand called')
  console.log(store.getState())
  switch (command) {
    case 'inc':
      store.dispatch({type: 'INC'})
      break;
    case 'dec':
      store.dispatch({type: 'DEC'})
      break;
  }
}

module.exports = parseCommand
