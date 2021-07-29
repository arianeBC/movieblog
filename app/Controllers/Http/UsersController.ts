import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

  public async reviewsByUser({ auth }: HttpContextContract) {
    const user = await auth.authenticate();
    await user.preload("reviews");
    const reviews = user.reviews;

    return reviews;
  }

  public async moviesByUser({ auth }: HttpContextContract) {
    const user = await auth.authenticate();
    await user.preload("movies");
    const movies = user.movies;

    return movies;
  }

}
