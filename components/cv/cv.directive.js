totemikaSiteApp.directive("tsCv", function(){
    return {
        replace: true,
        templateUrl: function(elem, attr) { return "components/cv/cv.template.html"; }
    }
});