describe('ListPageController', function() {
  var ctrl;

  beforeEach(module('AngularToDo'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('ListPageController');
  }));

  it('initializes with no todos', function() {
    expect(ctrl.todos).toEqual([]);
  });

  describe('#addToDo()', function() {
    it('adds a todo to the todos', function() {
      ctrl.newToDo = 'Get a cat';
      ctrl.addToDo();
      expect(ctrl.todos[0].description).toEqual('Get a cat');
    });
  });
});
