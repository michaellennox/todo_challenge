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

    it('a user can mark an item complete', function() {
      newToDoInput.sendKeys('Something to complete');
      newToDoButton.click();

      var completeToDoButton = element(by.css('.btn-danger'));

      completeToDoButton.click();

      var toDoText = element(by.binding('todo.text'));
      var successButton = element(by.css('.glyphicon-ok'));

      expect(toDoText.getAttribute('class')).toContain('strike');
      expect(successButton.isDisplayed()).toBeTruthy();
      expect(completeToDoButton.isDisplayed()).toBeFalsy();
    });

    it('a user should be able to view how many tasks are in their list', function() {
      var listLength = element(by.css('.list-counter'));

      expect(listLength.getText()).toEqual('0 items');

      newToDoInput.sendKeys('A random item');
      newToDoButton.click();

      expect(listLength.getText()).toEqual('1 item');

      newToDoInput.sendKeys('Another random item');
      newToDoButton.click();

      expect(listLength.getText()).toEqual('2 items');
    });
  });
});
