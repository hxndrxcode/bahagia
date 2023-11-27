'use strict'

const Config = use('Config')

class ProductController {
  async index({ view }) {
    const categories = Config.get('data.store_categories')
    return view.render('pages/store', {
      title: 'Produk/Layanan',
      categories,
      breadcrumb: [
        {path: '/store', title: 'Produk/Layanan', active: true}
      ]
    })
  }
}

module.exports = ProductController
