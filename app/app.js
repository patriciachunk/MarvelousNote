(function() {
  var app = angular.module('marvelousnote', [
    'ui.router'
  ]);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes');

    $stateProvider

      .state('notes', {
        url: '/notes',
        template: '<h1>MarvelousNote</h1><p>{{ message }}</p>',
        controller: function($scope) {
          $scope.message = "Welcome to MarvelousNote!";
        }
      });
  }

  config['$inject'] = ['$stateProvider', '$urlRouterProvider'];
  app.config(config);
})();
