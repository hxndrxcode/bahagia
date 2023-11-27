'use strict'

const Config = use('Config')

class BlogController {
  async index({ view }) {
    const categories = Config.get('data.blog_categories')
    return view.render('pages/blog', {
      title: 'Blog',
      categories,
      breadcrumb: [
        {path: '/blog', title: 'Blog', active: true}
      ]
    })
  }


}

module.exports = BlogController
