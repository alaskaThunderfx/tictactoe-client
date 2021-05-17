const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('in onSignUp')
  // get data from form
  const form = event.target
  const userData = getFormFields(form)
  console.log('userData: ', userData)
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('in onSignIn')
  // get data from form
  const form = event.target
  const userData = getFormFields(form)
  console.log('userData: ', userData.id)
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('in onSignOut')
  // get data from form
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
