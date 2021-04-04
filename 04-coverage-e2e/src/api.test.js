import { describe, it } from 'mocha'
import request from 'supertest'
import app from './api.mjs'
import assert from 'assert'

describe('API Suite Test', () => {
  describe('/contact', () => {
    it('should request the contact page and return HTTP status 200', async () => {
      const response = await request(app).get('/contact').expect(200)

      assert.deepStrictEqual(response.text, 'contact us page')
    })
  })
  describe('/hello', () => {
    it('should request an inexistent route and redirect to /hello', async () => {
      const response = await request(app).get('/hi').expect(200)

      assert.deepStrictEqual(response.text, 'Hello World!')
    })
  })
  describe('/login', () => {
    it('should login successfully on the login route and return HTTP Status 200', async () => {
      const response = await request(app).post('/login').send({ username: 'gerjunior', password: '123' }).expect(200)

      assert.deepStrictEqual(response.text, 'Logged Successfully')
    })

    it('should unauthorize a request when requesting it using wrong credentials and return HTTP status 401', async () => {
      const response = await request(app).post('/login').send({ username: 'xXxGamerxXx', password: 'ImSoSmart123' }).expect(401)

      assert.ok(response.unauthorized)
      assert.deepStrictEqual(response.text, 'Login failed!')

    })
  })
})
