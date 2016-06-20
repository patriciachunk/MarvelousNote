(function() {
  angular
    .module('marvelousnote.notes', ['ui.router'])
    .congig(notesConfig)
    .controller('NotesController', NotesController);


function notesConfig($stateProvider) {
  $stateProvider

    .state('notes', {
      url: '/notes',
      templateUrl: 'notes/notes.html',
      controller: 'NotesController'
    })


    .state('notes.form', {
      url: '/:noteId',
      templateUrl: 'notes/notes-form.html'
    });
}

function NotesController($scope){
  $scope.notes = [];
  $scope.save = function() {
    $scope.notes.push($scope.note);
    $scope.note = { title: '', body: '' };
  };
}
})();
