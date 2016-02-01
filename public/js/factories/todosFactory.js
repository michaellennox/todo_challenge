angularToDo.factory('todos', function() {
  var todos = {};

  todos.list = [];

  todos.newToDo = function(todoText) {
    todos.list.push({text: todoText, complete: false, editThis: false});
  };

  todos.removeToDo = function(todo) {
    var index = todos.list.indexOf(todo);
    todos.list.splice(index, 1);
  };

  return todos;
});
