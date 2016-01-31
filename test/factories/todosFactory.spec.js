describe('factory: todos', function() {
  var todosFactory;

  beforeEach(module('AngularToDo'));

  beforeEach(inject(function(todos) {
    todosFactory = todos;
  }));

  it('initializes with no todos', function() {
    expect(todosFactory.list).toEqual([]);
  });

  describe('#newToDo()', function() {
    it('adds a new todo to the list', function() {
      todosFactory.newToDo('this should have been added');
      expect(todosFactory.list[0].text).toEqual('this should have been added');
    });
  });
});
