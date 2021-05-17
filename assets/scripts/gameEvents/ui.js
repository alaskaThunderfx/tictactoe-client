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

const indexGamesSuccess = function (res) {
  // let gamesHtml = ''
  // for (let i = 0; i < res.games.length; i++) {
  //   console.log(res.games[i])
  // }
  // $('#index-games').html(gamesHtml)
}

const cell0ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell0').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
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
  console.error()
}

const cell1ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell1').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
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

const cell1ClickFailure = function () {
  console.error()
}

const cell2ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell2').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[2] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell2').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[2] = 'x'
    console.log(store.game.cells)
  }
}

const cell2ClickFailure = function () {
  console.error()
}

const cell3ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell3').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[3] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell3').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[3] = 'x'
    console.log(store.game.cells)
  }
}

const cell3ClickFailure = function () {
  console.error()
}

const cell4ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell4').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[4] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell4').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[4] = 'x'
    console.log(store.game.cells)
  }
}

const cell4ClickFailure = function () {
  console.error()
}

const cell5ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell5').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[5] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell5').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[5] = 'x'
    console.log(store.game.cells)
  }
}

const cell5ClickFailure = function () {
  console.error()
}

const cell6ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell6').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[6] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell6').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[6] = 'x'
    console.log(store.game.cells)
  }
}

const cell6ClickFailure = function () {
  console.error()
}

const cell7ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell7').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[7] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell7').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[7] = 'x'
    console.log(store.game.cells)
  }
}

const cell7ClickFailure = function () {
  console.error()
}

const cell8ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player X turn</h3>')
    $('#cell8').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[8] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    $('#player-turn').html('<h3>Player O turn</h3>')
    $('#cell8').html('<img src=https://media.tenor.com/images/a5d2790f3215f182b0ec6fb814da61b6/tenor.gif alt=BG>')
    console.log('player X', playerState)
    store.game.cells[8] = 'x'
    console.log(store.game.cells)
  }
}

const cell8ClickFailure = function () {
  console.error()
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  indexGamesSuccess,
  cell0ClickSuccess,
  cell0ClickFailure,
  cell1ClickSuccess,
  cell1ClickFailure,
  cell2ClickSuccess,
  cell2ClickFailure,
  cell3ClickSuccess,
  cell3ClickFailure,
  cell4ClickSuccess,
  cell4ClickFailure,
  cell5ClickSuccess,
  cell5ClickFailure,
  cell6ClickSuccess,
  cell6ClickFailure,
  cell7ClickSuccess,
  cell7ClickFailure,
  cell8ClickSuccess,
  cell8ClickFailure
}
