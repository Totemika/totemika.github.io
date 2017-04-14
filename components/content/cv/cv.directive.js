totemikaSiteApp.directive("tsCv", function(){
    return {
        replace: true,
        templateUrl: function(elem, attr) { return "components/content/cv/cv.template.html"; }
    }
});