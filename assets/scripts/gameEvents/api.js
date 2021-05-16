const config = require('../config.js')
const store = require('../store.js')

const newGame = function (gameData) {
  console.log('in newGame')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: gameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell0Click = function (gameData) {
  console.log('in cell0Click ', store.game.cells)
  return $.ajax({
    // method: 'PATCH',
    // url: config.apiUrl + '/games/' + store.game.id,
    // gameData,
    // headers: {
    //   Authorization: 'Bearer ' + store.user.token
    // }
  })
}

module.exports = {
  newGame,
  cell0Click
}
