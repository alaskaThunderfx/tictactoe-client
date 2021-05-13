'use strict'
const ticTacToeEvents = require('./authEvents/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', ticTacToeEvents.onSignUp)
  $('#sign-in').on('submit', ticTacToeEvents.onSignIn)
  $('#sign-out').on('click', ticTacToeEvents.onSignOut)
})
