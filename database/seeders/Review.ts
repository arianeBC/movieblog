import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Review from 'App/Models/Review'

export default class ReviewSeeder extends BaseSeeder {
  public async run() {
    await Review.createMany([
      {
        rank: 9,
        title: 'A real disaster',
        comment:
          'I consider myself fortunate not to have known much about the movie. Actually, I was expecting a french disaster-flick in the vein of "127 Hours", a post-avalanche survival tale, because of the promotional poster. Boy, I was wrong. Being misguided often gets me irritated, but "Force Majeure" was shockingly impressive.',
        userId: 1,
        movieId: 2,
      },
      {
        rank: 6,
        title:
          'Most interesting "food for thought" narrative compromised by lack of judicious editing',
        comment:
          '"Force Majeure" falls under the appellation of the "interesting" film. There\'s much food for thought here as one attempts to decipher the film\'s underlying meaning. The film\'s weakness is the lack of judicious editing, causing it to often move along at a glacial pace. I could have done without some of the long-winded visuals as their presence was detrimental to the narrative\'s overall fluidity.',
        userId: 3,
        movieId: 2,
      },
      {
        rank: 10,
        title: 'False teeth and the thing about happiness',
        comment:
          'Toni Erdmann starts slow and is in general a movie that takes its time. 162 minutes might suggest an overlong or very slow paced film, but in this 162 minutes we get a firework-like examination of a relationship between a father and a daughter. And yes, Toni Erdmann is a comedy. There are some moments that are so hilarious, that they gained applause mid film from the audience at my screening. But it is also a tragedy. A really complex one actually. There is so much loneliness in those characters, so much longing. Toni Erdmann is constantly entertaining, extremely well acted and emotionally compelling. A masterpiece of German cinema.',
        userId: 1,
        movieId: 3,
      },
      {
        rank: 6,
        title: 'Very Long Slow and Satisfying',
        comment:
          'Overall I found this quite a deep, thoughtful and very German movie. Watch lots of German movies and you will know what I mean. I would be very hesitant to watch it twice.',
        userId: 4,
        movieId: 3,
      },
      {
        rank: 7,
        title: 'Not a comfortable movie to watch....',
        comment:
          "But it's well done and I like that it's dialogue was mostly unscripted and most of the actors are real people taken from the streets. It felt like a real dysfunctional road trip with some interesting characters. Pretty raw at times.",
        userId: 3,
        movieId: 4,
      },
      {
        rank: 9,
        title: 'Gritty, Compelling and Harsh',
        comment:
          "If you are a fan of Larry Clarks Kids then this is the film for you. It portrays a harsh reality that most people would rather not see. It's got that train wreck quality that won't let you turn away and at the same time has you horrified. Clearly this film isn't for everyone. You should have an idea what it is about before you partake in the investment of watching it. But if you are like me and enjoy the sociological aspect of feeling like you are eavesdropping on the life of these young people then it's a great film.",
        userId: 2,
        movieId: 4,
      },
      {
        rank: 9,
        title: 'A cheerful film with an underlying vein of tragedy',
        comment:
          'Happy-Go-Lucky is a highly enjoyable and often very funny film, but it also carries terrible sadness. I have never been a massive fan of Mike Leigh, but lately I have to admit that I was wrong. He just seems to get better and better.',
        userId: 2,
        movieId: 5,
      },
      {
        rank: 8,
        title: 'A cheerful film with an underlying vein of tragedy',
        comment:
          "The director has done a superb job with this production; it is packed with intelligent, witty dialogs and convincingly drawn characters. Our world needs a lot more people like Poppy, or at least -- if they don't possess her strength and optimism -- people who are sympathetic with her values instead of feeling threatened by humaneness. Yes, life is difficult and often sad, so let's tackle it with a smile!",
        userId: 4,
        movieId: 5,
      },
    ])
  }
}
