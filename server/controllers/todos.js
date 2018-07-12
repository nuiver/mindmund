const Todo = require('../models').Todo

module.exports = {
  create(req, res) {
    console.log('create hit...')
    return Todo.create({
      title: req.body.title
    })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error))
  }
}
