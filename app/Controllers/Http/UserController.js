'use strict'

const User = use('App/Models/User')

class UserController {

  async member({ view }) {
    return view.render('pages/member', {
      title: 'Anggota',
      breadcrumb: [
        {path: '/member', title: 'Anggota', active: true}
      ]
    })
  }

  async profile({ view }) {
    return view.render('pages/profile', {
      title: 'Profil Saya',
      breadcrumb: [
        {path: '/profile', title: 'Profil', active: true}
      ]
    })
  }

  async memberDetail({ params, view }) {
    const user = await User.query().where('username', params.username).where('status', 'active').first()
    if (!user) {
      return view.render('errors/404', {
        title: 'Anggota tidak ditemukan'
      })
    }

    return view.render('pages/member_detail', {
      user,
      title: user.fullname,
      breadcrumb: [
        {path: '/member', title: 'Anggota'},
        {path: '/m/'+user.username, title: user.fullname, active: true}
      ]
    })
  }

  async apiMemberList({ request, response, auth }) {
    const req = request.all()
    const members = await User.query()
      .where('status', 'active')
      .where(function(q) {
        if (req.search) {
          const search = '%'+req.search+'%'
          q.where('fullname', 'like', search).orWhere('nickname', 'like', search).orWhere('username', 'like', search)
        }
      })
      .orderBy('id', 'desc')
      .fetch()

    const results = []
    if (members) {
      for (const m of members.toJSON()) {
        const item = {
          username: m.username,
          fullname: m.fullname,
          created_at: m.created_at,
          city: m.city,
        }
        if (auth.user) {
          item.instagram = m.instagram
          item.whatsapp = m.whatsapp
        }
        results.push(item)
      }
    }

    return response.status(200).send({
      members: results,
    })
  }
}

module.exports = UserController
