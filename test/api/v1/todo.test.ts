process.env.NODE_ENV = 'testing'

import * as chai from 'chai'
import faker from 'faker'
import request from 'supertest'
import app from '../../../src/server'

const expect = chai.expect
const accept = 'application/json'

import * as models from '../../../src/models'
import { TodoAttributes } from '../../../src/models/todo'

const db = models // as any

describe('GET /api/v1/todo', () => {

  beforeEach( () => {
    db.Todo.destroy({
      where: {},
      cascade: true,
      truncate: true
    })
  })

  it('responds with json array', done => {
    request(app)
      .get('/api/v1/todo')
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

describe('POST /api/v1/todo', () => {
  it('responds with created todo', done => {
    const newTodo: TodoAttributes = {
      title: faker.lorem.sentence(),
      note: faker.lorem.sentences(2)
    }
    request(app)
      .post('/api/v1/todo')
      .set('Accept', accept)
      .send(newTodo)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body).to.be.an('object')
        createdId = parseInt(res.body.id, 10)
        expect(res.body.title).to.equal(newTodo.title)
        expect(res.body.note).to.equal(newTodo.note)
        done()
      })
  })
})

describe('PATCH /api/v1/todo', () => {
  it('updates the given todo id', done => {
    const updateTodo: TodoAttributes = {
      title: faker.lorem.sentence(),
      note: faker.lorem.sentences(2)
    }
    request(app)
      .patch(`/api/v1/todo/${createdId}`)
      .set('Accept', accept)
      .send(updateTodo)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body[1][0]).to.be.an('object')
        expect(res.body[1][0].title).to.equal(updateTodo.title)
        expect(res.body[1][0].note).to.equal(updateTodo.note)
        done()
      })
  })

  it('returns 0 rows updated for non-existent id', done => {
    const updateTodo: TodoAttributes = {
      title: faker.lorem.sentence(),
      note: faker.lorem.sentences(2)
    }
    request(app)
      .patch(`/api/v1/todo/${createdId + 10}`)
      .set('Accept', accept)
      .send(updateTodo)
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

// describe('DELETE /api/v1/todo', () => {
//   it('deletes the given todo id', done => {
//     request(app)
//       .delete(`/api/v1/todo/${createdId}`)
//       .set('Accept', accept)
//       .expect(200)
//       .end((err, res) => {
//         if (err) {
//           return done(err)
//         }
//         expect(res.body.message).to.equal('Todo deleted successfully.')
//         done()
//       })
//   })
// })
