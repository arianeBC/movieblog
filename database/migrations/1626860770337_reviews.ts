import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reviews extends BaseSchema {
  protected tableName = 'reviews'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('rank').notNullable()
      table.string('title', 255).notNullable()
      table.text('comment').notNullable()
      table.integer('user_id', 180).unsigned().notNullable().references('id').inTable('users')
      table.integer('movie_id').unsigned().nullable().references('id').inTable('movies')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
