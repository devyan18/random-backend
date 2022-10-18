import mongoose from 'mongoose'
import superTest from 'supertest'

import UserModel from '../../user/models/user.model'

import { app, server } from '../../../index'

const request = superTest(app)

const userTest = {
  username: 'tester',
  email: 'tester@gmail.com',
  password: '123456'
}

beforeEach(async () => {
  await UserModel.deleteMany({})
})

describe('Create new person', () => {
  const personURL = '/api/v1/persons'

  test('Should return 200 and a new person', async () => {
    const userResponse = await request
      .post('/api/v1/auth/register')
      .send(userTest)

    const token = userResponse.body.token

    const response = await request.put(personURL)
      .set('Authorization', `Bearer ${token}`)
      .send({
        firstName: 'Tester',
        lastName: 'Test',
        dateOfBirth: '2002-05-17'
      })

    expect(response.status).toBe(200)
  })
})

afterAll(async () => {
  await UserModel.deleteMany({})
  mongoose.connection.close()
  return server.close()
})
