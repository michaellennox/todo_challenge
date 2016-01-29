describe('ToDo List Page', function() {
  describe('After visiting a new list page', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080/#/lists/new');
    });

    it('a user is able to enter a new todo', function() {
      var newToDoInput = element(by.model('listPageCtrl.newToDo'));
      var newToDoButton = element(by.css('.new-todo-form button'));
      var todoList = element.all(by.repeater('todo in listPageCtrl.todos'));

      newToDoInput.sendKeys('Find a cat');
      newToDoButton.click();

      expect(todoList.get(0).getText()).toContain('Find a cat');
    });
  });
});
