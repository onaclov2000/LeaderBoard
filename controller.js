
angular.module('myapp', ['firebase'])
    .controller('TodoCtrl', ['$scope', '$firebase',
        function($scope, $firebase) {

            $scope.hidden = false;
            var ref = new Firebase("https://onaclovtech-apps.firebaseio.com/CS_7637/");
            var sync = $firebase(ref);
            $scope.todos = sync.$asObject();
        }
    ]);
