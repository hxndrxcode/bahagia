'use strict'

const Config = use('Config')

class ProductController {
  async index({ view }) {
    return view.render('pages/project', {
      title: 'Project',
      breadcrumb: [
        {path: '/project', title: 'Project', active: true}
      ]
    })
  }
}

module.exports = ProductController
