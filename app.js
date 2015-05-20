angular.module('starter', [])
  
  .controller("NavbarCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.current_user = { points_count: 3 };

    $rootScope.$on('addPoint', function() {
      $scope.current_user.points_count = ++$scope.current_user.points_count
    })
  }])

  .controller("MovieCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.searchMovies = function() {
      $http.get('http://www.omdbapi.com/?s=' + $scope.search)
        .success(function(data) {
          console.log("Succeeded : ) ");
          console.log(data);
          // $scope.movies = data.Search
        }).failure(function(data) {
          console.log("Failed : ( ");
          $scope.movies = [];
        })
    }

    $scope.foo = { bar: 'My First Angular App' }

    $scope.addPoint = function() {
      $rootScope.$broadcast('addPoint')
    }
  }]);
