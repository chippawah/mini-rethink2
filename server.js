var express = require('express');
var bodyParser = require('body-parser');

var rethinkCtrl = require('./rethinkCtrl');

var app = express();
var port = 8080;

app.use(bodyParser.json())
app.listen(port, function(err){
  if(!err){
    console.log('Server listening on ' + port);
  }
})

app.post('/todo', rethinkCtrl.addTodo);
app.get('/todos', rethinkCtrl.getAllTodos);
app.patch('/todo/:id', rethinkCtrl.editTodo);
app.get('/todo/:id', rethinkCtrl.getTodo)