
module.exports = function (app, passport, auth) {

  var user = require('../app/controllers/user')

  // user routes
  app.post('/user/login', user.login)

}
