// // import TodoItem from '../models/todoitem'
// import TodoItem = require('../models/todoitem')

// export function create(req, res) {
//     return TodoItem.create({
//       content: req.body.content,
//       todoId: req.params.todoId
//     })
//       .then(todoItem => res.status(201).send(todoItem))
//       .catch(error => res.status(400).send(error))
//   }
// }