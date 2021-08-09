import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Movie from 'App/Models/Movie'

export default class MovieSeeder extends BaseSeeder {
  public async run() {
    await Movie.createMany([
      {
        title: 'Force Majeure',
        year: '2014',
        rank: 7.3,
        certification: 'R',
        duration: '2h',
        synopsis:
          'A family vacationing in the French Alps is confronted with a devastating avalanche.',
        userId: 1,
      },
      {
        title: 'Toni Erdmann',
        year: '2016',
        rank: 7.4,
        certification: 'R',
        duration: '2h 42min',
        synopsis:
          "A practical joking father tries to reconnect with his hard working daughter by creating an outrageous alter ego and posing as her CEO's life coach.",
        userId: 1,
      },
      {
        title: 'American Honey',
        year: '2016',
        rank: 7,
        certification: 'R',
        duration: '2h 43min',
        synopsis:
          'A teenage girl with nothing to lose joins a traveling magazine sales crew, and gets caught up in a whirlwind of hard partying, law bending and young love as she criss-crosses the Midwest with a band of misfits.',
        userId: 2,
      },
      {
        title: 'Happy-Go-Lucky',
        year: '2008',
        rank: 7,
        certification: 'R',
        duration: '1h 58min',
        synopsis:
          'A look at a few chapters in the life of Poppy, a cheery, colorful, North London schoolteacher whose optimism tends to exasperate those around her.',
        userId: 2,
      },
    ])
  }
}
