const env = process.env.NODE_ENV || 'development'
const config = {
  development: {
  },
  production: {
  }
}

module.exports = config[env]
