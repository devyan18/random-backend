import mongoose from 'mongoose'
import superTest from 'supertest'

import UserModel from '@modules/user/models/user.model'

import { app, server } from '../index'

const request = superTest(app)

beforeEach(async () => {
  await UserModel.deleteMany({})
})

describe('Register new User', () => {
  const registerURL = '/api/v1/users/register'

  test('Should return 201 and a new user', async () => {
    const response = await request.post(registerURL).send({
      username: 'tester',
      email: 'tester@gmail.com',
      password: '123456'
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('username')
    expect(response.body).toHaveProperty('email')
    expect(response.body).toHaveProperty('password')
    expect(response.body).toHaveProperty('isActive')
    expect(response.body).toHaveProperty('person')
    expect(response.body).toHaveProperty('role')
  })

  test('Should return 406 if not passed username', async () => {
    const response = await request.post(registerURL).send({
      email: 'tester@gmail.com',
      password: '123456'
    })
    expect(response.status).toBe(406)
  })
  test('Should return 406 if not passed email', async () => {
    const response = await request.post(registerURL).send({
      username: 'tester',
      password: '123456'
    })
    expect(response.status).toBe(406)
  })
  test('Should return 406 if not passed password', async () => {
    const response = await request.post(registerURL).send({
      username: 'tester',
      email: 'tester@gmail.com'
    })
    expect(response.status).toBe(406)
  })
})

describe('Login User', () => {
  const loginURL = '/api/v1/users/login'

  test('Should return 200 and a token', async () => {
    const user = await UserModel.create({
      username: 'tester',
      email: 'tester@gmail.com',
      password: '123456'
    })
    const response = await request.post(loginURL).send({
      email: user.email,
      password: '123456'
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  })

  test('Sohuld return 404 if user not found', async () => {
    await UserModel.create({
      username: 'tester',
      email: 'tester@gmail.com',
      password: '123456'
    })

    const response = await request.post(loginURL).send({
      email: 'notfound@gmail.com',
      password: '123456'
    })
    expect(response.status).toBe(404)
  })

  test('Sohuld return 404 if password not found', async () => {
    const user = await UserModel.create({
      username: 'tester',
      email: 'tester@gmail.com',
      password: '123456'
    })

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
