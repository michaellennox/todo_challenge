angularToDo.controller('ListPageController', ['todos', function(todos) {
  var self = this;

  self.todoList = todos.list;

  self.addToDo = function() {
    todos.newToDo(self.newToDoText);
    self.newToDoText = '';
  };

  self.deleteToDo = function(todo) {
    todos.removeToDo(todo);
  };
}]);
