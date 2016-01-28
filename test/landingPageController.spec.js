describe('LandingPageController', function() {
  beforeEach(function() { module('AngularToDo') });

  beforeEach(inject(function($controller) {
    ctrl = $controller('LandingPageController');
  }));

  it('initializes with an empty listId', function() {
    expect(ctrl.listId).toBeUndefined();
  });
});
