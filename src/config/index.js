const env = process.env.NODE_ENV || 'development'
const config = {
  development: {
    databaseURL: 'https://vr-cam-161603.firebaseio.com',
    serviceAccount: require('./serviceAccountKey.json')
  },
  production: {
    databaseURL: 'https://vr-cam-161603.firebaseio.com',
    serviceAccount: require('./serviceAccountKey.json')
  }
}

module.exports = config[env]
