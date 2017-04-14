totemikaSiteApp.controller("contentController", ['$scope', function($scope, $rootScope, twitterService) {
    $scope.isActiveTab = function(tabName){
        return $scope.selectedTab === tabName;
    };
}]);
