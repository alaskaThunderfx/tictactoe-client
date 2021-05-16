const store = require('../store.js')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').html(`
    <h1>Welcome! Thanks for joining us!</h1>
    <h3>${res.user.email}</h3>
    `)
  $('#messaging').addClass('success')

  console.log(res)
  setTimeout(() => {
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 5000)
}

const signUpFailure = function () {
  $('#messaging').html('<p>Sign up failed...</p>')
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('#messaging').html(`
    <h1>Welcome back!</h1>
    <h3>${res.user.email}</h3>
    `)
  $('#messaging').addClass('success')

  console.log(res)
  $('#sign-in-display').html(`
    `)
  $('#sign-in-display').addClass('success')

  setTimeout(() => {
    $('#messaging').html('')
    $('#sign-in-display').html('')
    $('#messaging').removeClass('success')
    $('#sign-in-display').removeClass('success')
  }, 5000)

  $('.authentication').hide()
  $('#hidden').removeClass('initial-hide')

  store.user = res.user
}

const signInFailure = function () {
  $('#messaging').html('<p>Sign in failed...</p>')
}

const signOutSuccess = function () {
  $('#messaging').html(`
    <h1>Farewell!</h1>
    <h3>${store.user.email}</h3>`)
  $('#messaging').addClass('success')
  console.log()
  setTimeout(() => {
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 5000)

  $('.authentication').show()
  $('#hidden').addClass('initial-hide')
  $('#game-board').addClass('board-hide')
  $('#player-turn').html('')

  store.user = null
}

const signOutFailure = function () {
  $('#messaging').html('<p>Sign out failed...</p>')
}

const onIndexGamesSuccess = function (res) {
  console.log(res)
  let gamesHtml = ''
  res.game.forEach(game => {
    gamesHtml += `
    <p>${game}</p>`
  })
  $('#index-games').html(gamesHtml)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  onIndexGamesSuccess
}
