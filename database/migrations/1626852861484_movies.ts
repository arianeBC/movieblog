import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 255).notNullable()
      table.string('year', 10).notNullable()
      table.float('rank').notNullable()
      table.string('certification', 255).notNullable()
      table.string('duration', 20).notNullable()
      table.text('synopsis').notNullable()
      table.integer('user_id', 180).unsigned().notNullable().references('id').inTable('users')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
