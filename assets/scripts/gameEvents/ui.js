const store = require('../store.js')

let playerState = 1

const newGameSuccess = function (res) {
  $('#messaging').html(`
    <h1>New Game Started!</h1>
    `)
  $('#messaging').addClass('success')
  $('#game-board').removeClass('board-hide')

  console.log('store.games = ', res.game.id)
  setTimeout(() => {
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 5000)

  $('#player-turn').html('<h3>Player X turn</h3>')

  store.game = res.game
  console.log(store)
}

const newGameFailure = function () {
  $('#messaging').html('<p>New Game failed...</p>')
}

const cell0ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    console.log('player X', playerState)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    console.log('player O', playerState)
  }
}

const cell0ClickFailure = function () {

}

module.exports = {
  newGameSuccess,
  newGameFailure,
  cell0ClickSuccess,
  cell0ClickFailure
}
