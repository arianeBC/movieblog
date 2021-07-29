import { DateTime } from 'luxon'
import Review from "App/Models/Review";
import Movie from "App/Models/Movie";
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public name: string;

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Review)
  public reviews: HasMany<typeof Review>;

  @hasMany(() => Movie)
  public movies: HasMany<typeof Movie>;

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
  
}
