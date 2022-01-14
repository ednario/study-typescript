import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({ 
    email: 'ednario@gmail.com',
    password: 'very-good',
    techs: ['Node.js', 'React.js', 'Java',{title: 'JavaScrip', experience: 100}],
  })

  console.log(user.email)

  return response.json({ message: 'Hello world'})
}
