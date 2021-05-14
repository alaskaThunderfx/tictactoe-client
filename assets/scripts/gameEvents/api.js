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

const cell0Click = function () {
  console.log('in Cell 0 click')
  return $.ajax({
  })
}

module.exports = {
  newGame,
  cell0Click
}
