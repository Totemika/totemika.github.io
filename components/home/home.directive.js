totemikaSiteApp.directive("tsHome", function(){
    return {
        replace: true,
        templateUrl: function(elem, attr) { return "components/home/home.template.html"; }
    }
});
