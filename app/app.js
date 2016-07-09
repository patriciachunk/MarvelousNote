(function() {
  var app = angular.module('marvelousnote', [
    'ui.router',
    'ngFlash',
    'marvelousnote.notes'
  ]);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }

  config.$inject = ['$urlRouterProvider'];
  app.config(config);
})();
