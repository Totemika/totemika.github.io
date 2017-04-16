var totemikaSiteApp = angular.module("totemikaSiteApp", ['ui.router']);


totemikaSiteApp.controller("totemikaSiteAppController", ['$scope', '$rootScope', 'twitterService', function($scope, $rootScope, twitterService) {

    $rootScope.twitterService = twitterService;
    $rootScope.$on('$viewContentLoading', function(event, viewConfig)
    {
        $rootScope.twitterService.destroyAllWidgets();
        $rootScope.twitterService.loadAllWidgets();
    });

    $scope.selectedTab = "home";
    $scope.isActiveTab = function(tabName){
        return $scope.selectedTab === tabName;
    };

}]);