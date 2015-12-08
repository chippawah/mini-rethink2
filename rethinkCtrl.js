var r = require('rethinkdb');
var todos = r.db('todo').table('todos');
var connection
r.connect({db: 'todo'}, function(err, conn){
  console.log('Connection created!');
  connection = conn
})

module.exports = {
  getAllTodos: function(req, res){
    r.db('todo').table('todos').run(connection, function(err, cursor){
      console.log(cursor)
      cursor.toArray(function(err, todos){
        console.log(todos)
        res.status(200).send(todos)
      })
    })
  },
  addTodo: function(req, res){
    todos.insert(req.body).run(connection, function(err, result){
      console.log(result);
      res.status(201).send(result)
    })
  },
  editTodo: function(req, res){
    todos.get(req.params.id).update(req.body).run(connection, function(err, result){
      console.log(result)
      res.status(200).send(result)
    })
  },
  getTodo: function(req, res){
    todos.get(req.params.id).run(connection, function(err, result){
      console.log(result);
      res.status(200).send(result)
    })
  }
}