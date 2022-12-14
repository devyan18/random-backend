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

describe('Register new User', () => {
  const registerURL = '/api/v1/auths/register'

  test('Should return 200 and a new user', async () => {
    const response = await request.post(registerURL).send({
      username: userTest.username,
      email: userTest.email,
      password: userTest.password
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  })

  test('Should return 406 if not passed username', async () => {
    const response = await request.post(registerURL).send({
      email: userTest.email,
      password: userTest.password
    })
    expect(response.status).toBe(406)
  })
  test('Should return 406 if not passed email', async () => {
    const response = await request.post(registerURL).send({
      username: userTest.username,
      password: userTest.password
    })
    expect(response.status).toBe(406)
  })
  test('Should return 406 if not passed password', async () => {
    const response = await request.post(registerURL).send({
      username: userTest.username,
      email: userTest.email
    })
    expect(response.status).toBe(406)
  })
})

describe('Login User', () => {
  const loginURL = '/api/v1/auths/login'

  test('Should return 200 and a token', async () => {
    const user = await UserModel.create(userTest)

    const response = await request.post(loginURL).send({
      email: user.email,
      password: userTest.password
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  })

  test('Sohuld return 404 if user not found', async () => {
    await UserModel.create(userTest)

    const response = await request.post(loginURL).send({
      email: 'notfound@gmail.com',
      password: '123456'
    })
    expect(response.status).toBe(404)
  })

  test('Sohuld return 404 if password not found', async () => {
    const user = await UserModel.create(userTest)

    const response = await request.post(loginURL).send({
      email: user.email,
      password: '123455'
    })
    expect(response.status).toBe(404)
  })
})

afterAll(async () => {
  await UserModel.deleteMany({})
  mongoose.connection.close()
  return server.close()
})
