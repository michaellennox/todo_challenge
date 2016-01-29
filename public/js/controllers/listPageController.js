angularToDo.controller('ListPageController', [function() {
  var self = this;

  self.todos = [];

  self.addToDo = function(todo) {
    self.todos.push(todo);
  };
}]);
