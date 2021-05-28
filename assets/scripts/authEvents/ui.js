const store = require('../store.js')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').css('top', '70%')
  $('#messaging').css('left', '34%')
  $('#messaging').html(`
    <h1>Welcome! Thanks for joining us!</h1>
    <h3>${res.user.email}</h3>
    `)
  $('#messaging').addClass('success')

  console.log(res)
  setTimeout(() => {
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 3000)
}

const signUpFailure = function () {
  $('#messaging').css('top', '70%')
  $('#messaging').css('left', '44%')
  $('#messaging').html('<p>Sign up failed...</p>')
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('#messaging').html(`
    <h1>Welcome back!</h1>
    <h3>${res.user.email}</h3>
    `)
  $('#messaging').addClass('success')
  $('#messaging').css('top', '50%')
  $('#messaging').css('left', '43%')
  $('#messaging').css('animation', 'fadeInAndOut 3s')
  $('.header').css('animation', 'slideUp 1s')
  $('#sign-in-display').html('')
  $('#sign-in-display').addClass('success')

  setTimeout(() => {
    $('.header').css('top', '1%')
    $('.header').css('width', '70vw')
  }, 999)

  setTimeout(() => {
    $('#messaging').css('animation', '')
    $('#messaging').html('')
    $('#sign-in-display').html('')
    $('#messaging').removeClass('success')
    $('#sign-in-display').removeClass('success')
  }, 3000)

  $('.authentication').hide()
  $('#hidden').removeClass('initial-hide')

  store.user = res.user
}

const signInFailure = function () {
  $('#messaging').html('<p>Sign in failed...</p>')
}

const signOutSuccess = function () {
  $('.board').css('animation', 'spinOut 1s')
  $('#messaging').html(`
    <h1>Farewell!</h1>
    <h3>${store.user.email}</h3>`)
  $('#messaging').addClass('success')
  $('#messaging').css('top', '20%')
  $('#messaging').css('left', '44%')
  $('#messaging').css('animation', 'fadeInAndOut 3s')
  $('.header').css('top', '30%')
  $('.header').css('animation', 'slideDown 1s')
  setTimeout(() => {
    $('#game-board').addClass('board-hide')
  }, 1000)
  setTimeout(() => {
    $('.board').css('animation', '')
    $('#messaging').css('animation', '')
    $('#messaging').html('')
    $('#messaging').removeClass('success')
  }, 3000)

  $('.authentication').show()
  $('#hidden').addClass('initial-hide')
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
