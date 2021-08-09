import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Movie from 'App/Models/Movie'

import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rank: number

  @column()
  public title: string

  @column()
  public comment: string

  @column()
  public userId: number

  @column()
  public movieId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationship
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  // Relationship
  @belongsTo(() => Movie)
  public movies: BelongsTo<typeof Movie>
}
