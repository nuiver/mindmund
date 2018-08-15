process.env.NODE_ENV = 'testing'

import * as chai from 'chai'
import request from 'supertest'
import app from '../../../src/server/server'

const expect = chai.expect

describe('GET /api/v1/stage', () => {
  it('responds with json array', done => {
    request(app)
      .get('/api/v1/stage')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('responds with Inbox', done => {
    request(app)
      .get('/api/v1/stage/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body.stageName).to.equal('Inbox')
        done()
      })
  })
})
