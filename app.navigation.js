var navigationConfig = function($stateProvider, $urlRouteProvider){
    $stateProvider
        .state("index", {
            url: "/",
            templateUrl: "new.index.html"
        })
        .state("index.cv", {
            url: "/cv",
            templateUrl: "templates/cv.html"
        })
        .state("index.contact", {
            url: "/contact",
            templateUrl: "templates/contact.html"
        });
    $urlRouteProvider.otherwise("/");
};