var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    mysql: {
        host: '',
        port: '',
        user: '',
        password: '',
        database: '',
        timezone: ''
    },
    redis: {
        host: '127.0.0.1',
        port: '6379',
        db: 'sprint2'
    },
    root: rootPath,
		host: "localhost",
    app: {
      name: 'frameworkPreview - Development'
    }
  },
  test: {
    mysql: {
      host: '',
      port: '',
      user: '',
      password: '',
      database: '',
      timezone: ''
    },
    redis: {
      host: '',
      port: '',
      db: ''
    },
    root: rootPath,
		host: "",
    app: {
      name: 'frameworkPreview - Test'
    }
  },
  production: {
    mysql: {
        host: '',
        port: '',
        user: '',
        password: '',
        database: '',
        timezone: 'Asia/Shanghai'
    },
    redis: {
        host: '',
        port: '',
        db: ''
    },
    root: rootPath,
		host: "",
    app: {
      name: 'frameworkPreview - Production'
    }
  }
}