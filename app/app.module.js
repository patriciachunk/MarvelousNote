{
  angular.module('marvelousnote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'marvelousnote.notes',
    'marvelousnote.notesForm'
  ])
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
}
