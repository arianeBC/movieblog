import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await User.createMany([
      {
        email: 'johndoe@gmail.com',
        name: 'John Doe',
        password: 'azerty',
      },
      {
        email: 'janedoe@gmail.com',
        name: 'Jane Doe',
        password: 'secret',
      },
      {
        email: 'bradpitt@gmail.com',
        name: 'Brad Pitt',
        password: 'topsecret',
      },
      {
        email: 'inspecteurgadget@gmail.com',
        name: 'Inspecteur Gadget',
        password: 'supersecret',
      },
    ])
  }
}
