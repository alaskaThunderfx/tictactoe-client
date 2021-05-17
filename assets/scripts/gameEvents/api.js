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

const indexGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell0Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell1Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell2Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell3Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell4Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell5Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell6Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell7Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cell8Click = function (newGameData) {
  console.log('in cellClick ', store.game.cells)
  console.log(newGameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: newGameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  indexGames,
  cell0Click,
  cell1Click,
  cell2Click,
  cell3Click,
  cell4Click,
  cell5Click,
  cell6Click,
  cell7Click,
  cell8Click
}
