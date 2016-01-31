angularToDo.factory('todos', function() {
  var todos = {};

  todos.list = [];

  todos.newToDo = function(todoText) {
    todos.list.push({text: todoText, complete: false, editThis: false});
  };

  return todos;
});
