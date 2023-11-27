'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('status').notNullable()
      table.string('username', 80).notNullable().unique()
      table.string('phone', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('fullname')
      table.string('nickname')
      table.string('city')
      table.string('birth_year')
      table.string('gender')
      table.string('instagram')
      table.string('whatsapp')
      table.text('bio')
      table.text('reason')
      table.text('source')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
