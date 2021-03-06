'use strict'
const env = process.env.NODE_ENV

let config = {
  production: {
    user: process.env.DB_USER || '',
    host: process.env.DB_HOST || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME,
  },
  test: {
    user: process.env.DB_USER || '',
    host: process.env.DB_HOST || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME,
  },
  dev: {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'gimnasioucp',
  },
}

module.exports = config[env]
