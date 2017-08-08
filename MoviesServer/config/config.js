var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'moviesServer'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dhoyoso:dhoyoso@ds149201.mlab.com:49201/movieserver'
  },

  test: {
    root: rootPath,
    app: {
      name: 'moviesServer'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dhoyoso:dhoyoso@ds149201.mlab.com:49201/movieserver'
  },

  production: {
    root: rootPath,
    app: {
      name: 'moviesServer'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dhoyoso:dhoyoso@ds149201.mlab.com:49201/movieserver'
  }
};

module.exports = config[env];
