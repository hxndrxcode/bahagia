'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'PageController.index')

Route.get('/register', 'AuthController.register')
Route.get('/login', 'AuthController.login')
Route.get('/logout', 'AuthController.logout')
Route.get('/api/phonecheck', 'AuthController.apiPhoneCheck')
Route.post('/api/register', 'AuthController.apiRegister')
Route.post('/api/login', 'AuthController.apiLogin')

Route.get('/member', 'UserController.member')
Route.get('/m/:username', 'UserController.memberDetail')
Route.get('/api/members', 'UserController.apiMemberList')
Route.get('/profile', 'UserController.profile')
Route.get('/profile/edit', 'UserController.editProfile')
Route.get('/profile/password', 'UserController.editPassword')

Route.get('/blog', 'BlogController.index')
Route.get('/store', 'ProductController.index')
Route.get('/project', 'ProjectController.index')
