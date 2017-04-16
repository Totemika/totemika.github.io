totemikaSiteApp.directive("tsContact", function(){
    return {
        replace: true,
        templateUrl: function(elem, attr) { return "components/contact/contact.template.html"; }
    }
});
