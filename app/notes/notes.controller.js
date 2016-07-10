(function() {
  angular
    .module('marvelousnote.notes')
    .controller('NotesController', NotesController);

  NotesController.$inject = ['$scope', 'NotesService'];
  function NotesController($scope, NotesService){
    $scope.notes = NotesService.notes;
  }
})();
