import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import app from '../src/App'

chai.use(chaiHttp)
const expect = chai.expect

describe('GET api/v1/todos', () => {
  it('responds with JSON array', () => {
    return chai
      .request(app)
      .get('/api/v1/todos')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res).to.be.json
        expect(res.body).to.be.an('array')
        expect(res.body).to.have.length(3)
      })
  })

  it('should include Buy some coffee', () => {
    return chai
      .request(app)
      .get('/api/v1/todos')
      .then(res => {
        let coffee = res.body.find(todo => todo.name === 'Buy some coffee')
        expect(coffee).to.exist
        expect(coffee).to.have.all.keys([
          'name'
        ])
      })
  })
})
