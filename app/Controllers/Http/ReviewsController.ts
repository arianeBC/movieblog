import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Review from "App/Models/Review";

export default class ReviewsController {

  public async index({ request}: HttpContextContract) {
    const reviews = await Review.query().preload('user').preload('movies');
    return reviews
  }

  public async show({ request, params}: HttpContextContract) {
    try {
      const review = await Review.find(params.id);
      if(review){
        await review.preload('user')
        await review.preload('movies');
        return review
      }
    } catch (error) {
      console.log(error)
    }
  }


  public async update({ auth, request, params}: HttpContextContract) {
    const review = await Review.find(params.id);

    if (review) {
      review.rank = request.input('rank');
      review.title = request.input('title');
      review.comment = request.input('comment');
      if (await review.save()) {
        await review.preload('user')
        await review.preload('movies')
        return review
      }
      return; // 422
    }

    return; // 401
  }


  public async store({ auth, request, response}: HttpContextContract) {
    const user = await auth.authenticate();
    const review = new Review();
    review.rank = request.input('rank');
    review.title = request.input('title');
    review.comment = request.input('comment');
    review.movieId = request.input('movies');
    await user.related('reviews').save(review)
    return review
  }

  public async destroy({response, auth, request, params}: HttpContextContract) {
    const user = await auth.authenticate();
    const review = await Review.query().where('user_id', user.id).where('id', params.id).delete();
    return response.redirect('/');
  }

}
