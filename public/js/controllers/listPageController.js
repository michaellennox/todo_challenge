angularToDo.controller('ListPageController', [function() {
  var self = this;

  self.todos = [];

  self.addToDo = function() {
    self.todos.push({description: self.newToDo});
  };
}]);
