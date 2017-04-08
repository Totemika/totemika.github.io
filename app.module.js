var totemikaSiteApp = angular.module("totemikaSiteApp", ['ui.router']);

totemikaSiteApp.config(function($stateProvider){
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
});

totemikaSiteApp.controller("totemikaSiteAppController", function($scope) {
});