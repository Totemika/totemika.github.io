totemikaSiteApp.controller("navBarController", ['$scope', function($scope, $rootScope, twitterService) {
    $scope.select = function(tabName){
        $scope.selectedTab = tabName;
    }
}]);