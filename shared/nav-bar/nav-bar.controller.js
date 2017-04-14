totemikaSiteApp.controller("navBarController", ['$scope', function($scope, $rootScope, twitterService) {
    $scope.selectedTab = "home";
    $scope.select = function(tabName){
        $scope.selectedTab = tabName;
    }
}]);