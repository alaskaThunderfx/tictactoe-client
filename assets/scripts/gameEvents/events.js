const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

store.playerState = 1

const onNewGame = function (event) {
  event.preventDefault()
  console.log('in onNewGame')
  const gameData = {}
  api.newGame(gameData)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onCell0Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[0] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 0,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      newGameData = {
        game: {
          cell: {
            index: 0,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell0Click(newGameData)
      .then(ui.cell0ClickSuccess)
      .catch(ui.cell0ClickFailure)
  } else {
    console.log('This cell[0] is occupied')
  }
}

const onCell1Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[1] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 1,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      newGameData = {
        game: {
          cell: {
            index: 1,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell1Click(newGameData)
      .then(ui.cell1ClickSuccess)
      .catch(ui.cell1ClickFailure)
  } else {
    console.log('This cell[1] is occupied')
  }
}
module.exports = {
  onNewGame,
  onCell0Click,
  onCell1Click
}
