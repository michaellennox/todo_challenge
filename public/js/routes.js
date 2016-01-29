angularToDo.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/partials/landing.html'
      })
      .when('/lists/:list_id', {
        templateUrl: '../views/partials/list.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
