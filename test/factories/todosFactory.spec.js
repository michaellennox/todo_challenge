describe('factory: todos', function() {
  var todosFactory;

  beforeEach(module('AngularToDo'));

  beforeEach(inject(function(todos) {
    todosFactory = todos;
  }));

  it('initializes with no todos', function() {
    expect(todosFactory.list).toEqual([]);
  });

  // describe()
})
