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
  if (gameData.cells[0] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      gameData.cells[0] = 'x'
    } else {
      gameData.cells[0] = 'o'
    }
    api.cell0Click(gameData)
      .then(ui.cell0ClickSuccess)
      .catch(ui.cell0ClickFailure)
  } else {
    console.log('This cell[0] is occupied')
  }
}

module.exports = {
  onNewGame,
  onCell0Click
}
