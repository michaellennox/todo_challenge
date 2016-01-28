angularToDo.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/templates/landing.html'
      })
      .when('/list/:list_id', {
        templateUrl: '../views/templates/list.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
