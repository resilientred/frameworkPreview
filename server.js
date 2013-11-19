/**
 * Module dependencies.
 */

var express = require('express')
  , Resource = require('express-resource')
  , fs = require('fs')
  , env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env]

var app = express()

// express settings
require('./config/express')(app, config)

// Bootstrap routes
require('./config/routes')(app)

// Start the app by listening on <port>
var port = process.env.PORT || 4000
app.listen(port)
console.log('Express app started on port '+port)

exports = module.exports = app
