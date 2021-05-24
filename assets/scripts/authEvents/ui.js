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
  $('#messaging').css('animation', 'fadeIn 5s')
  $('.header').css('animation', 'slideUp 1s')
  $('#sign-in-display').html('')
  $('#sign-in-display').addClass('success')

  setTimeout(() => {
    $('.header').css('top', '6%')
    $('.header').css('width', '70vw')
  }, 999)

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
  $('.header').css('top', '37%')
  $('.header').css('animation', 'slideDown 1s')
  setTimeout(() => {
    $('.header').css('width', 'auto')
  }, 1000)
  setTimeout(() => {
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 5000)

  $('.authentication').show()
  $('#hidden').addClass('initial-hide')
  $('#game-board').addClass('board-hide')
  $('#player-turn').html('')
  $('#victory').html('')

  store.user = null
}

const signOutFailure = function () {
  $('#messaging').html('<p>Sign out failed...</p>')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
