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
      store.playerState++
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
      store.playerState++
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

const onCell2Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[2] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 2,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      store.playerState++
      newGameData = {
        game: {
          cell: {
            index: 2,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell2Click(newGameData)
      .then(ui.cell2ClickSuccess)
      .catch(ui.cell2ClickFailure)
  } else {
    console.log('This cell[2] is occupied')
  }
}

const onCell3Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[3] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 3,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      store.playerState++
      newGameData = {
        game: {
          cell: {
            index: 3,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell3Click(newGameData)
      .then(ui.cell3ClickSuccess)
      .catch(ui.cell3ClickFailure)
  } else {
    console.log('This cell[3] is occupied')
  }
}

const onCell4Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[4] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 4,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      store.playerState++
      newGameData = {
        game: {
          cell: {
            index: 4,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell4Click(newGameData)
      .then(ui.cell4ClickSuccess)
      .catch(ui.cell4ClickFailure)
  } else {
    console.log('This cell[4] is occupied')
  }
}

const onCell5Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[5] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 5,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      store.playerState++
      newGameData = {
        game: {
          cell: {
            index: 5,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell5Click(newGameData)
      .then(ui.cell5ClickSuccess)
      .catch(ui.cell5ClickFailure)
  } else {
    console.log('This cell[5] is occupied')
  }
}

const onCell6Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[6] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 6,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      store.playerState++
      newGameData = {
        game: {
          cell: {
            index: 6,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell6Click(newGameData)
      .then(ui.cell6ClickSuccess)
      .catch(ui.cell6ClickFailure)
  } else {
    console.log('This cell[6] is occupied')
  }
}

const onCell7Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[7] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 7,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      store.playerState++
      newGameData = {
        game: {
          cell: {
            index: 7,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell7Click(newGameData)
      .then(ui.cell7ClickSuccess)
      .catch(ui.cell7ClickFailure)
  } else {
    console.log('This cell[7] is occupied')
  }
}

const onCell8Click = function (event) {
  event.preventDefault()
  const gameData = store.game
  let newGameData = {}
  if (gameData.cells[8] === '') {
    if (store.playerState === 1) {
      store.playerState--
      console.log('Stored player state is: ', store.playerState)
      newGameData = {
        game: {
          cell: {
            index: 8,
            value: 'x'
          },
          over: false
        }
      }
    } else {
      store.playerState++
      newGameData = {
        game: {
          cell: {
            index: 8,
            value: 'o'
          },
          over: false
        }
      }
    }
    api.cell8Click(newGameData)
      .then(ui.cell8ClickSuccess)
      .catch(ui.cell8ClickFailure)
  } else {
    console.log('This cell[8] is occupied')
  }
}

module.exports = {
  onNewGame,
  onCell0Click,
  onCell1Click,
  onCell2Click,
  onCell3Click,
  onCell4Click,
  onCell5Click,
  onCell6Click,
  onCell7Click,
  onCell8Click
}
