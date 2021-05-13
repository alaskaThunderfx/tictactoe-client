const store = require('../store.js')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').html('<p>Sign up success!!!</p>')
  $('#messaging').addClass('success')

  console.log(res)
  $('#sign-up-display').html(`
    <h1>Welcome!</h1>
    <h3>${res.user.email}</h3>
    `)
  $('#sign-up-display').addClass('success')

  setTimeout(() => {
    $('#messaging').html('')
    $('#sign-up-display').html('')
    $('#messaging').removeClass('success')
    $('#sign-up-display').removeClass('success')
  }, 5000)
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('#messaging').html('<p>Sign in success!!!</p>')
  $('#messaging').addClass('success')

  console.log(res)
  $('#sign-in-display').html(`
    <h1>Welcome back!</h1>
    <h3>${res.user.email}</h3>
    `)
  $('#sign-in-display').addClass('success')

  setTimeout(() => {
    $('#messaging').html('')
    $('#sign-in-display').html('')
    $('#messaging').removeClass('success')
    $('#sign-in-display').removeClass('success')
  }, 5000)

  store.user = res.user
}

const signOutSuccess = function () {
  $('#messaging').html('<p>Sign out success!!!</p>')
  $('#messaging').addClass('success')

  console.log()
  $('#sign-out-display').html(`
    <h1>Farewell!</h1>
    <h3>${store.user.email}</h3>
    `)
  $('#sign-out-display').addClass('success')

  setTimeout(() => {
    $('#messaging').html('')
    $('#sign-out-display').html('')
    $('#messaging').removeClass('success')
    $('#sign-out-display').removeClass('success')
  }, 5000)

  store.user = null
}

const signUpFailure = function () {
  $('#messaging').html('<p>Sign up failed...</p>')
}

const signInFailure = function () {
  $('#messaging').html('<p>Sign in failed...</p>')
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
