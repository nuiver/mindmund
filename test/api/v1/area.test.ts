process.env.NODE_ENV = 'testing'

import * as chai from 'chai'
import faker from 'faker'
import request from 'supertest'
import app from '../../../src/server'

const expect = chai.expect
const accept = 'application/json'

import * as models from '../../../src/models'
import { AreaAttributes } from '../../../src/models/area'

const db = models as any

describe('GET /api/v1/area', () => {

  it('responds with json array', done => {
    request(app)
      .get('/api/v1/area')
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
})

let createdId: number

describe('POST /api/v1/area', () => {
  it('responds with created area', done => {
    const newArea: AreaAttributes = {
      areaName: faker.lorem.sentence()
    }
    request(app)
      .post('/api/v1/area')
      .set('Accept', accept)
      .send(newArea)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body).to.be.an('object')
        createdId = parseInt(res.body.id, 10)
        expect(res.body.areaName).to.equal(newArea.areaName)
        done()
      })
  })
})

describe('PATCH /api/v1/area', () => {
  it('updates the given area id', done => {
    const updateArea: AreaAttributes = {
      areaName: faker.lorem.sentence()
    }
    request(app)
      .patch(`/api/v1/area/${createdId}`)
      .set('Accept', accept)
      .send(updateArea)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body[1][0]).to.be.an('object')
        expect(res.body[1][0].areaName).to.equal(updateArea.areaName)
        done()
      })
  })

  it('returns 0 rows updated for non-existent id', done => {
    const updateArea: AreaAttributes = {
      areaName: faker.lorem.sentence()
    }
    request(app)
      .patch(`/api/v1/area/${createdId + 10}`)
      .set('Accept', accept)
      .send(updateArea)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body[0]).to.be.equal(0)
        done()
      })
  })
})

describe('DELETE /api/v1/area', () => {
  it('deletes the given area id', done => {
    request(app)
      .delete(`/api/v1/area/${createdId}`)
      .set('Accept', accept)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body.message).to.equal('Area deleted successfully.')
        done()
      })
  })
})
