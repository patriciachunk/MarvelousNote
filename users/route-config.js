{
  angular.module('meganote.users')
  .config(usersConfig);

  usersConfig.$inject = ['$stateProvider'];
  function usersConfig($stateProvider) {
    $stateProvider

    .state('sign-up', {
      url: '/sign-up',
      template: '<h1>SignUp State</h1>',
    });
  }
}
