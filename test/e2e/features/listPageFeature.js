describe('ToDo List Page', function() {
  describe('After visiting a new list page', function() {
    var newToDoInput = element(by.model('listPageCtrl.newToDoText'));
    var newToDoButton = element(by.css('.new-todo-form button'));

    var todoList = element.all(by.repeater('todo in listPageCtrl.todoList'));

    beforeEach(function() {
      browser.get('http://localhost:8080/#/lists/new');
    });

    it('a user is able to enter a new todo', function() {
      newToDoInput.sendKeys('Find a cat');
      newToDoButton.click();

      expect(todoList.get(0).getText()).toContain('Find a cat');
      expect(newToDoInput.getAttribute('value')).toEqual('');
    });

    it('a user can edit a todo which has been created', function() {
      newToDoInput.sendKeys('I\'m going to edit you');
      newToDoButton.click();

      var editToDoButton = element(by.css('.glyphicon-pencil'));

      editToDoButton.click();

      var editToDoInput = element(by.css('.edit-todo-input'));

      editToDoInput.clear();
      editToDoInput.sendKeys('This has now been edited');
      editToDoInput.sendKeys(protractor.Key.ENTER);

      expect(todoList.get(0).getText()).toContain('This has now been edited');
      expect(todoList.get(0).getText()).not.toContain('I\'m going to edit you');
    });
  });
});
