const store = require('../store.js')

let playerState = 1

const newGameSuccess = function (res) {
  $('#messaging').html(`
    <h1>New Game Started!</h1>
    `)
  $('#messaging').addClass('success')
  $('#game-board').removeClass('board-hide')

  setTimeout(() => {
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 5000)

  $('#player-turn').html('<h3>Player X turn</h3>')

  store.game = res.game
  console.log('store.games = ', store.game._id)
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
    console.log('player O', playerState)
    store.game.cells[0] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell0').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[0] = 'x'
    console.log(store.game.cells)
  }
}

const cell0ClickFailure = function () {

}

const cell1ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    console.log('player O', playerState)
    store.game.cells[1] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell1').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[1] = 'x'
    console.log(store.game.cells)
  }
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  cell0ClickSuccess,
  cell0ClickFailure
}
