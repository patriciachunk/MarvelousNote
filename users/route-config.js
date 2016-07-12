{
  angular.module('marvelousnote.users')
  .config(usersConfig);

  usersConfig.$inject = ['$stateProvider'];
  function usersConfig($stateProvider) {
    $stateProvider

    .state('sign-up', {
      url: '/sign-up',
      template: '<sign-up></sign-up>',
    });
  }
}
