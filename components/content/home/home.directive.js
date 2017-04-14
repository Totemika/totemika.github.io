totemikaSiteApp.directive("tsHome", function(){
    return {
        replace: true,
        templateUrl: function(elem, attr) { return "components/content/home/home.template.html"; }
    }
});
