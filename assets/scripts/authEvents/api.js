const config = require('../config.js')
const store = require('../store.js')

const signUp = function (userData) {
  console.log('in signUp')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: userData
  })
}

const signIn = function (userData) {
  console.log('in signIn')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: userData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
