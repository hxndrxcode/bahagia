const crypto = require('crypto')

class Helper {
  generateRandom(size = 6) {
    return crypto.randomBytes(16).toString('hex').slice(0, size)
  }
}

module.exports = new Helper()
