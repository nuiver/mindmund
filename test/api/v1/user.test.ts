process.env.NODE_ENV = 'testing'

import * as chai from 'chai'
import faker from 'faker'
import request from 'supertest'
import app from '../../../src/server/server'

const expect = chai.expect
const accept = 'application/json'

// import { UserAttributes } from '../../../src/server/models/user'

describe('*** User authentication', () => {
  const testUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: '1234',
    confirmation: '1234'
  }

  const testUserLogin = {
    username: testUser.username,
    password: '1234'
  }

  let testUserLocation: string
  // let testUserId: number

  it('registers a new user', done => {
    request(app)
      .post('/api/v1/user/register')
      .set('Accept', accept)
      .send(testUser)
      .expect(302)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        testUserLocation = res.header.location
        expect(res.header.location).to.include('api/v1/user/')
        done()
      })
  })

  it('gets and checks the new user', done => {
    request(app)
      .get(testUserLocation)
      .set('Accept', accept)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        // testUserId = parseInt(res.body.id, 10)
        expect(res.body.username).to.equal(testUser.username)
        // tslint:disable no-unused-expression
        expect(res.body.password).to.not.exist
        // tslint:enable no-unused-expression
        done()
      })
  })

  it('logs the user in', done => {
    request(app)
      .post('/api/v1/user/login')
      .set('Accept', accept)
      .send(testUserLogin)
      .expect(302)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.header.location).to.include('api/v1/user/')
        done()
      })
  })
})
