describe('ListPageController', function() {
  var ctrl, todosFactoryMock;

  beforeEach(function() {
    todosFactoryMock = jasmine.createSpyObj('todos', ['newToDo', 'list']);
    module('AngularToDo', {
      todos: todosFactoryMock
    });
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('ListPageController');
  }));

  it('initializes with a todoList equal to todos factory list', function() {
    expect(ctrl.todoList).toEqual(todosFactoryMock.list);
  });

  describe('#addToDo()', function() {
    it('calls newToDo() on todos factory with the newToDo model data', function() {
      ctrl.newToDoText = 'Get a cat';
      ctrl.addToDo();
      expect(todosFactoryMock.newToDo).toHaveBeenCalledWith('Get a cat');
    });

    it('resets the newToDoText model to empty', function() {
      ctrl.newToDoText = 'this should vanish';
      ctrl.addToDo();
      expect(ctrl.newToDoText).toEqual('');
    });
  });
});
