const api = require('./api.js')
const ui = require('./ui.js')

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
  api.cell0Click()
    .then(ui.cell0ClickSuccess)
    .catch(ui.cell0ClickFailure)
}

module.exports = {
  onNewGame,
  onCell0Click
}
