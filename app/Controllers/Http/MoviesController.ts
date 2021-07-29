import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movie from 'App/Models/Movie';

export default class MoviesController {

  public async index({ request}: HttpContextContract) {
    const movies = await Movie.query().preload('user').preload('reviews');
    return movies;
  }

  public async show({ request, params}: HttpContextContract) {
    try {
      const movie = await Movie.find(params.id);
      if(movie){
        await movie.preload('user');
        await movie.preload('reviews');
        return movie;
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async update({ auth, request, params}: HttpContextContract) {
    const movie = await Movie.find(params.id);

    if (movie) {
      movie.title = request.input('title');
      movie.year = request.input('year');
      movie.rank = request.input('rank');
      movie.certification = request.input('certification');
      movie.duration = request.input('duration');
      movie.synopsis = request.input('synopsis');
      if (await movie.save()) {
        await movie.preload('user');
        await movie.preload('reviews');
        return movie;
      }
      return; // 422
    }

    return; // 401
  }

  public async store({ auth, request, response}: HttpContextContract) {
      const user = await auth.authenticate();
      const movie = new Movie();
      movie.title = request.input('title');
      movie.year = request.input('year');
      movie.rank = request.input('rank');
      movie.certification = request.input('certification');
      movie.duration = request.input('duration');
      movie.synopsis = request.input('synopsis');
      await user.related('movies').save(movie);
      return movie;
  }

  public async destroy({response, auth, request, params}: HttpContextContract) {
    const user = await auth.authenticate();
    const movie = await Movie.query().where('user_id', user.id).where('id', params.id).delete();
    return 404;
  }

}
