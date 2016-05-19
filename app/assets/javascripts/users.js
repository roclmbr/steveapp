var app = angular.module('app', ['ngResource']);

app.factory("User", function($resource) {
  return $resource("users/:id", { id: '@id' }, {
    index:   { method: 'GET', isArray: true, responseType: 'json' },
    update:  { method: 'PUT', responseType: 'json' }
  });
})

app.controller("usersController", function($scope, User) {
        $scope.users = User.index()

        $scope.addUser = function() {
        user = User.save($scope.newUser)

        $scope.users.push(user)
        $scope.newUser = {}
        }

        $scope.deleteUser = function(index) {
    
        user = $scope.users[index]
        User.delete(user)
        $scope.users.splice(index, 1);
        }
    });

app.controller('title', function(){
	this.title = title;
});

var title = "Steve Adamson";