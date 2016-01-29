describe('ListPageController', function() {
  beforeEach(function() { module('AngularToDo') });

  beforeEach(inject(function($controller) {
    ctrl = $controller('ListPageController');
  }));

  it('initializes with no todos', function() {
    expect(ctrl.todos).toBeUndefined();
  });
});
