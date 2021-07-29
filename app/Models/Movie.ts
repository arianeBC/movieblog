import { DateTime } from 'luxon'
import User from "App/Models/User";
import Review from "App/Models/Review";
import {
  BaseModel,
  column,
  BelongsTo,
  belongsTo,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";

export default class Movie extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string;

  @column()
  public year: string;

  @column()
  public rank: number;

  @column()
  public certification: string;

  @column()
  public duration: string;

  @column()
  public synopsis: string;

  @column()
  public userId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationship
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @hasMany(() => Review)
  public reviews: HasMany<typeof Review>;
  
}
