angular.module('MyApp',['appRoutes','mainCtrl', 'authService', 'UserCtrl', 'userService', 'storyCtrl', 'storyService'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptor');
})
