const store = require('../store.js')

const newGameSuccess = function (res) {
  $('#messaging').html(`
    <h1>New Game Started!</h1>
    `)
  $('#messaging').addClass('success')

  console.log(res)
  setTimeout(() => {
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 5000)

  store.games = res.games
}

const newGameFailure = function () {
  $('#messaging').html('<p>New Game failed...</p>')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
