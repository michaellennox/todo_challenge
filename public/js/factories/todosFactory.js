angularToDo.factory('todos', function() {
  var todos = {};

  todos.list = [];

  todos.newToDo = function(todoText) {
    todos.list.push({text: todoText})
  };

  return todos;
});
