'use strict'

const { generateRandom } = require("./Helper")

const Hash = use('Hash')
const User = use('App/Models/User')

class AuthController {

  async register({ view}) {
    return view.render('pages/register', {
      title: 'Pendaftaran',
      breadcrumb: [
        {path: '/register', title: 'Pendaftaran', active: true}
      ]
    })
  }

  async login({ view}) {
    return view.render('pages/login', {
      title: 'Login',
      breadcrumb: [
        {path: '/login', title: 'Login', active: true}
      ]
    })
  }

  async logout({ response, auth }) {
    await auth.logout()
    return response.redirect('/')
  }

  async apiPhoneCheck({ request, response }) {
    const req = request.all()
    const check = await User.query().where('phone', req.phone).first()
    if (check) {
      return response.status(403).send({
        message: 'Nomor telepon telah terdaftar'
      })
    }

    return response.status(200).send({
      message: 'Aman'
    })
  }

  async apiRegister({ request, response }) {
    const req = request.all()
    const check = await User.query().where('phone', req.phone).first()
    if (check) {
      return response.status(403).send({
        message: 'Nomor telepon telah terdaftar'
      })
    }

    const data = {
      status: 'active',
      password: '123123',
      // status: 'pending',
      // password: generateRandom(),
      phone: req.phone,
      username: req.phone,
      fullname: req.fullname,
      nickname: req.nickname,
      city: req.city,
      birth_year: req.birth_year,
      gender: req.gender,
      instagram: req.instagram,
      whatsapp: req.whatsapp,
      bio: req.bio,
      reason: req.reason,
      source: req.source,
    }

    await User.create(data)
    return response.status(200).send({
      message: 'Berhasil'
    })
  }

  async apiLogin({ request, response, auth }) {
    const req = request.all()
    const user = await User.query().where('phone', req.phone).orWhere('username', req.phone).first()
    if (!user) {
      return response.status(404).send({
        message: 'Username/Nomor telepon belum terdaftar'
      })
    }

    const passwordValid = req.password == user.password
    if (!passwordValid) {
      return response.status(400).send({
        message: 'Password salah'
      })
    }

    if (user.status != 'active') {
      return response.status(400).send({
        message: 'Akun kamu belum/tidak aktif'
      })
    }

    await auth.remember(true).login(user)
    return response.status(200).send({
      message: 'Berhasil'
    })
  }
}

module.exports = AuthController
