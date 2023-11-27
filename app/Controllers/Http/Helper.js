const crypto = require('crypto')

class Helper {
  generateRandom(size = 6) {
    return crypto.randomBytes(16).toString('hex').slice(0, size)
  }
  createPermalink(str, delimiter) {
    if (!str) return ''
    const linked = str.replace(/[^a-z0-9]+/gi, '-').replace(/^-*|-*$/g, '').toLowerCase();
    if (!delimiter) {
      return linked
    }
    return linked.replace(/-/g, delimiter)
  }
}

module.exports = new Helper()
