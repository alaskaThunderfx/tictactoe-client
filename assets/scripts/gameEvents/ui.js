const store = require('../store.js')

let playerState = 1

const newGameSuccess = function (res) {
  store.gameOver = false
  playerState = 1
  $('#victory').html('')
  $('#cell0').html('')
  $('#cell1').html('')
  $('#cell2').html('')
  $('#cell3').html('')
  $('#cell4').html('')
  $('#cell5').html('')
  $('#cell6').html('')
  $('#cell7').html('')
  $('#cell8').html('')
  $('#messaging').html(`
    <h1>New Game Started!</h1>
    `)
  $('#messaging').addClass('success')
  $('#game-board').removeClass('board-hide')
  $('#player-turn').html('<h3>Puppy\'s turn</h3>')

  setTimeout(() => {
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 5000)

  store.game = res.game
  console.log('store.games = ', store.game._id)
  console.log(store)
}

const newGameFailure = function () {
  $('#messaging').html('<p>New Game failed...</p>')
}

const gameEndXWonSuccess = function () {
  $('#victory').html('')
  $('#victory').html('<h3>Puppy wins!</h3><img src=https://media0.giphy.com/media/dudcZA9e14HIY/giphy.gif alt=happy class=puppy>')
}

const gameEndOWonSuccess = function () {
  $('#victory').html('')
  $('#victory').html('<h3>Kitten wins!</h3><img src=https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/19-cute-kitten.gif?resize=330%2C328&ssl=1 alt=happy class=kitten>')
}

const gameEndTieSuccess = function () {
  $('#victory').html('')
  $('#victory').html('<h3>It\'s a tie!</h3><img src=https://media1.giphy.com/media/XcabqzOLg2tz2/giphy.gif alt=happy class=tie>')
}

const cell0ClickSuccess = function () {
  if (playerState === 0) {
    playerState++
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell0').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[0] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell1').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[1] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell2').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[2] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell3').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[3] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell4').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[4] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell5').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[5] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell6').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[6] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell7').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[7] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Puppy\'s turn</h3>')
    }
    $('#cell8').html('<img src=https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif alt=BG>')
    console.log('player O', playerState)
    store.game.cells[8] = 'o'
    console.log(store.game.cells)
  } else {
    playerState--
    $('#player-turn').html('')
    if (store.gameOver === false) {
      $('#player-turn').html('<h3>Kitten\'s turn</h3>')
    }
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
  gameEndXWonSuccess,
  gameEndOWonSuccess,
  gameEndTieSuccess,
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
