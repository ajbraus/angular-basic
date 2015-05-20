angular.module('starter', [])
  
  .controller("NavbarCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.current_user = { points_count: 3 };

    $rootScope.$on('addPoint', function() {
      $scope.current_user.points_count = ++$scope.current_user.points_count
    })
  }])

  .controller("MovieCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.addPoint = function() {
      $rootScope.$broadcast('addPoint')
    }
  }]);
