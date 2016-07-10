(function() {
  angular.module('marvelousnote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'marvelousnote.notes'
  ])
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
})();
