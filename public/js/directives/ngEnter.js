// this custom directive is taken from the following thread on ionic's forum
// https://forum.ionicframework.com/t/ng-enter-in-search-input-box/10682

angularToDo.directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});
