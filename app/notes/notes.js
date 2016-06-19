angular.module('marvelousnote.notes', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider

    .state('notes', {
      url: '/notes',
      templateUrl: 'notes/notes.html',
      controller: 'NotesController'
    });
})

.controller('NotesController', function($scope){
  $scope.message = 'I <3 angular';
});
