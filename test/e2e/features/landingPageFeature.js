describe('ToDo Landing Page', function() {
  describe('After opening the app', function() {
    beforeEach(function() {
      browser.get('http://localhost:8080');
    });

    it('a user is greeted by the ability to start a new list', function() {
      var newListButton = element(by.className('btn-primary'));

      expect(newListButton.getText()).toEqual('Start a New List');
    });

    it('a user is prompted to continue an old list', function() {
      var oldListInput = element(by.css('input'));

      expect(oldListInput.getAttribute('placeholder')).toEqual('Continue an Old List')
    });
  });
});
