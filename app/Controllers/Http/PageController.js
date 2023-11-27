'use strict'

const Config = use('Config')

class PageController {
  async index({ view, config }) {
    return view.render('pages/index', {
      isHome: true,
      hTitle: Config.get('data.tagline'),
    })
  }
}

module.exports = PageController
