var totemikaSiteApp = angular.module("totemikaSiteApp", ['ui.router']);

totemikaSiteApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state({
            name: "home",
            url: "/home",
            templateUrl: "templates/home.html"
        })
        .state({
            name: "cv",
            url: "/cv",
            templateUrl: "templates/cv.html"
        })
        .state({
            name: "contact",
            url: "/contact",
            templateUrl: "templates/contact.html"
        });
    $urlRouterProvider.otherwise("/home");
});

totemikaSiteApp.controller("totemikaSiteAppController", ['$scope', '$rootScope', 'twitterService', function($scope, $rootScope, twitterService) {
    $rootScope.twitterService = twitterService;
    $rootScope.$on('$viewContentLoading', function(event, viewConfig)
    {
        $rootScope.twitterService.destroyAllWidgets();
        $rootScope.twitterService.loadAllWidgets();
    });

}]);