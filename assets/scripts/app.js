'use strict'
const authEvents = require('./authEvents/events.js')
const gameEvents = require('./gameEvents/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#index-games').on('click', gameEvents.onIndexGames)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#cell0').on('click', gameEvents.onCell0Click)
  $('#cell1').on('click', gameEvents.onCell1Click)
  $('#cell2').on('click', gameEvents.onCell2Click)
  $('#cell3').on('click', gameEvents.onCell3Click)
  $('#cell4').on('click', gameEvents.onCell4Click)
  $('#cell5').on('click', gameEvents.onCell5Click)
  $('#cell6').on('click', gameEvents.onCell6Click)
  $('#cell7').on('click', gameEvents.onCell7Click)
  $('#cell8').on('click', gameEvents.onCell8Click)
//   while (store.game.over === false) {
//     gameEvents.wins.forEach(win => {
//       win.every(pos => {
//         if (pos !== '') {
//           console.log('tie')
//           store.game.over = true
//         }
//       })
//       if (win === xwin) {
//         console.log('X wins!')
//         store.game.over = true
//       } else if (win === owin) {
//         console.log('O wins!')
//         store.game.over = true
//       } else {
//
//       }
//     })
//   }
})
